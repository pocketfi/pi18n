import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Pi18nService {

  config: { [p: string]: { [p: string]: string } } = {}
  language: { [p: string]: string } = {}

  constructor() {
  }

  configure(config: { [lang: string]: { [key: string]: string } }): void {
    this.config = config
  }

  setLanguage(lang: string): void {
    if (Object.keys(this.config).length === 0) {
      throw Error('Pi18n is not configured')
    }
    this.language = this.config[lang]
    if (!this.language) {
      throw Error(`Language ${lang} is not present in config`)
    }
  }

  getLanguages(): string[] {
    return Object.keys(this.config)
  }

  translate(key: string): string {
    if (Object.keys(this.language).length === 0) {
      throw Error('Language is not configured')
    }
    return this.language[key]
  }

}
