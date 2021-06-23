import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GeoTableViewComponent } from './geo-table-view/geo-table-view.component'
import { UiLayoutModule } from '@geonetwork-ui/ui/layout'
import { UiMapModule } from '@geonetwork-ui/ui/map'

@NgModule({
  imports: [CommonModule, UiLayoutModule, UiMapModule],
  declarations: [GeoTableViewComponent],
  exports: [GeoTableViewComponent],
})
export class FeatureDatavizModule {}
