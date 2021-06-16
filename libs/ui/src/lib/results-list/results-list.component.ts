import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { RecordSummary, ResultsListLayout, FieldsList } from '@lib/common'

@Component({
  selector: 'ui-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsListComponent implements OnInit {
  @Input() records: RecordSummary[]
  @Input() loading: boolean
  @Input() layout: ResultsListLayout = ResultsListLayout.CARD
  layoutEnum = ResultsListLayout

  constructor() {}
    fields: any

  ngOnInit(): void {
    this.fields = FieldsList;
  }
}
