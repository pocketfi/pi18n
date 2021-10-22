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

  it('config not set translate', () => {
    expect(() => service.translate('greet')).toThrowMatching(e => e instanceof Error)
  })

  it('config not set set language', () => {
    expect(() => service.setLanguage('en')).toThrowMatching(e => e instanceof Error)
  })

  it('config set empty', () => {
    service.configure({})
    expect(() => service.setLanguage('en')).toThrowMatching(e => e instanceof Error)
  })

  it('set lang in config missing', () => {
    expect(() => service.configure(testConfig, 'ru')).toThrowMatching(e => e instanceof Error)
  })

  it('set lang in config', () => {
    service.configure(testConfig, 'en')
    expect(service.translate('greet')).toEqual('Hello!')
  })

  it('lang not set', () => {
    service.configure(testConfig)
    expect(() => service.translate('greet')).toThrowMatching(e => e instanceof Error)
  })

  it('lang set missing', () => {
    service.configure(testConfig)
    expect(() => service.setLanguage('ru')).toThrowMatching(e => e instanceof Error)
  })

  it('get languages', () => {
    service.configure(testConfig)
    expect(service.getLanguages()).toEqual(['en'])
  })

  it('translate existing', () => {
    service.configure(testConfig)
    service.setLanguage('en')
    expect(service.translate('greet')).toEqual('Hello!')
  })

  it('translate non-existing return key', () => {
    service.configure(testConfig)
    service.setLanguage('en')
    expect(service.translate('missed')).toEqual('missed')
  })
})
