import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import {
  AnalysisStatusEnumApiModel,
  BoundingBoxApiModel,
  DatasetUploadStatusApiModel,
  FileUploadApiService,
  UploadJobStatusApiModel,
} from '@lib/datafeeder-api'
import { WizardService } from '@lib/editor'
import Feature from 'ol/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import { fromExtent } from 'ol/geom/Polygon'
import { Subscription } from 'rxjs'
import { take } from 'rxjs/operators'
import SETTINGS from '../../../../settings'
import { config as wizardConfig } from '../../../configs/wizard.config'
import { DatafeederFacade } from '../../../store/datafeeder.facade'

const unknownLabel = 'datafeeder.datasetValidation.unknown'
const viewSrs = 'EPSG:3857'

marker('datafeeder.datasetValidation.unknown')
marker('datafeeder.validation.sample.title')
marker('datafeeder.validation.extent.title')
marker('datafeeder.validation.encoding')
marker('datafeeder.validation.projection')

@Component({
  selector: 'app-dataset-validation-page',
  templateUrl: './dataset-validation-page.html',
  styleUrls: ['./dataset-validation-page.css'],
})
export class DatasetValidationPageComponent implements OnInit, OnDestroy {
  encodingList = SETTINGS.encodings
  refSystem = [{ label: unknownLabel, value: '' }, ...SETTINGS.projections]

  geoJSONData: object
  geoJSONBBox: object

  dataset: DatasetUploadStatusApiModel

  featureIndex = 0
  crs: string
  encoding: string

  numOfEntities = 0
  numberOfSteps: number

  private routeParamsSub: Subscription
  private rootId: number
  private format = new GeoJSON({})

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private wizard: WizardService,
    private fileUploadApiService: FileUploadApiService,
    private facade: DatafeederFacade
  ) {}

  ngOnInit(): void {
    this.routeParamsSub = this.activatedRoute.params.subscribe(({ id }) => {
      this.rootId = id
      this.wizard.initialize(id, wizardConfig)
      this.numberOfSteps = this.wizard.getConfigurationStepNumber() + 1

      this.facade.upload$
        .pipe(take(1))
        .subscribe((job: UploadJobStatusApiModel) => {
          if (job.status === AnalysisStatusEnumApiModel.ERROR) {
            this.router.navigate(['/'], {
              relativeTo: this.activatedRoute,
              queryParams: { error: 'analysis' },
            })
            return
          }

          this.dataset = job.datasets[0]
          this.numOfEntities = this.dataset.featureCount
          this.crs = this.dataset.nativeBounds?.crs?.srs
          this.encoding = this.dataset.encoding
          if (this.crs) {
            this.refSystem = []
          }

          this.loadBounds()
          this.loadSampleFeature()
        })
    })
  }

  loadSampleFeature() {
    this.fileUploadApiService
      .getSampleFeature(
        this.rootId.toString(),
        this.dataset.name,
        this.featureIndex,
        this.encoding,
        viewSrs,
        this.crs
      )
      .subscribe((feature) => (this.geoJSONData = feature))
  }

  loadBounds() {
    this.fileUploadApiService
      .getBounds(this.rootId.toString(), this.dataset.name, viewSrs, this.crs)
      .subscribe((bbox: BoundingBoxApiModel) => {
        const { minx, miny, maxx, maxy } = bbox
        this.geoJSONBBox = this.format.writeFeatureObject(
          new Feature({ geometry: fromExtent([minx, miny, maxx, maxy]) }),
          { featureProjection: viewSrs }
        )
      })
  }

  handleEncodingChange(encoding) {
    this.encoding = encoding
    this.loadSampleFeature()
  }

  handleCrsChange(crs) {
    if (crs === '') {
      return
    }
    this.crs = crs
    this.loadBounds()
    this.loadSampleFeature()
  }

  submitValidation() {
    if (!this.isValid()) {
      return
    }
    const fields = ['encoding', 'nativeName', 'crs']
    fields.forEach((f) => this.wizard.setWizardFieldData(f, this[f]))
    this.router.navigate(['/', this.rootId, 'step', 1])
  }

  isValid(): boolean {
    return !!this.crs
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe()
  }
}
