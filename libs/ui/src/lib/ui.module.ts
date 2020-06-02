import { NgModule } from '@angular/core'
import { GnApiModule } from '@lib/gn-api'
import { DropdownSelectorComponent } from './dropdown-selector/dropdown-selector.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { RecordSummaryComponent } from './record-summary/record-summary.component'

@NgModule({
  declarations: [
    DropdownSelectorComponent,
    AutocompleteComponent,
    RecordSummaryComponent,
  ],
  imports: [NgbModule, BrowserModule, GnApiModule],
  exports: [
    DropdownSelectorComponent,
    AutocompleteComponent,
    RecordSummaryComponent,
  ],
})
export class UiModule {}