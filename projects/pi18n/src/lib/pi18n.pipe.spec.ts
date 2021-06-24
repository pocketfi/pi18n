import {Pi18nPipe} from './pi18n.pipe'
import {TestBed} from '@angular/core/testing'
import {Pi18nService} from './pi18n.service'

describe('IPipe', () => {
  let service: Pi18nService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(Pi18nService)
  })

  it('create an instance', () => {
    const pipe = new Pi18nPipe(service)
    expect(pipe).toBeTruthy()
  })

  it('translate', () => {
    const pipe = new Pi18nPipe(service)
    let result = pipe.transform('')
    expect(result).toBe('banana')
  })
})
