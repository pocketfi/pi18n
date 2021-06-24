import {Pipe, PipeTransform} from '@angular/core'
import {Pi18nService} from './pi18n.service'

/**
 * Translate given key using current language by translation files lookup.
 */
@Pipe({
  name: 'i',
  pure: false
})
export class Pi18nPipe implements PipeTransform {

  constructor(
    private service: Pi18nService
  ) {
  }

  transform(key: string, ...args: any[]): string {
    return this.service.translate(key)
  }

}
