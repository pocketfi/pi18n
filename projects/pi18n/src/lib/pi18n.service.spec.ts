import {TestBed} from '@angular/core/testing'

import {Pi18nService} from './pi18n.service'

describe('Pi18nService', () => {
  let service: Pi18nService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(Pi18nService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('translate', () => {
    expect(service.translate('')).toBe('banana')
  })
})
