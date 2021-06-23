import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTableViewComponent } from './geo-table-view.component';

describe('GeoTableViewComponent', () => {
  let component: GeoTableViewComponent;
  let fixture: ComponentFixture<GeoTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
