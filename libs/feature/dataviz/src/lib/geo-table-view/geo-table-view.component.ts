import { Component } from '@angular/core'
import {
  FEATURE_COLLECTION_POINT_FIXTURE_4326,
  MAP_CTX_LAYER_XYZ_FIXTURE,
  MapContextLayerTypeEnum,
} from '@geonetwork-ui/ui/map'
import { fromLonLat } from 'ol/proj'

@Component({
  selector: 'gn-ui-geo-table-view',
  templateUrl: './geo-table-view.component.html',
  styleUrls: ['./geo-table-view.component.css'],
})
export class GeoTableViewComponent {
  geojson = FEATURE_COLLECTION_POINT_FIXTURE_4326

  get tableData() {
    return this.geojson.features.map((f) => ({
      id: f.id,
      ...f.properties,
    }))
  }

  get mapData() {
    return {
      view: {
        // TODO: compute view extent based on data
        center: fromLonLat([-0.87, 48.59]),
        zoom: 6,
      },
      layers: [
        MAP_CTX_LAYER_XYZ_FIXTURE,
        {
          type: MapContextLayerTypeEnum.GEOJSON,
          data: this.geojson,
        },
      ],
    }
  }
}
