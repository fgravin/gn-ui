import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BootstrapService } from '@lib/common'
import { SearchFacade } from '@lib/search'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { of } from 'rxjs'
import { AppComponent } from './app.component'

const configFacetMock = {
  mods: {
    search: {
      facetConfig: {
        tag: {},
      },
    },
  },
}
const boostrapServiceMock = {
  uiConfReady: jest.fn(() => of(configFacetMock)),
}
const searchFacadeMock = {
  setConfigAggregations: jest.fn(),
  requestMoreResults: jest.fn(),
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EffectsModule.forRoot(),
        StoreModule.forRoot({}),
      ],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: BootstrapService,
          useValue: boostrapServiceMock,
        },
        {
          provide: SearchFacade,
          useValue: searchFacadeMock,
        },
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
