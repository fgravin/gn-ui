import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'gn-ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() data: any
  @ViewChild(MatSort) sort: MatSort
  dataSource: MatTableDataSource<any>

  get properties(): string[] {
    return Array.isArray(this.data) && this.data.length
      ? Object.keys(this.data[0])
      : []
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }
}
