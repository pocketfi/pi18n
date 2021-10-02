import {TestBed} from '@angular/core/testing'

import {Pi18nService} from './pi18n.service'

describe('Pi18nService', () => {
  let service: Pi18nService
  const testConfig = {
    'en': {
      'greet': 'Hello!'
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(Pi18nService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('config not set', () => {
    expect(() => service.translate('greet')).toThrowMatching(e => e instanceof Error)
  })

  it('lang not set', () => {
    service.configure(testConfig)
    expect(() => service.translate('greet')).toThrowMatching(e => e instanceof Error)
  })

  it('lang set invalid', () => {
    service.configure(testConfig)
    expect(() => service.setLanguage('ru')).toThrowMatching(e => e instanceof Error)
  })

  it('get languages', () => {
    service.configure(testConfig)
    expect(service.getLanguages()).toEqual(['en'])
  })

  it('translate', () => {
    service.configure(testConfig)
    service.setLanguage('en')
    expect(service.translate('greet')).toEqual('Hello!')
  })
})
