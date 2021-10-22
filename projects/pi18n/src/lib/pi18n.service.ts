import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Pi18nService {

  config: { [p: string]: { [p: string]: string } } = {}
  language: { [p: string]: string } = {}

  constructor() {
  }

  configure(config: { [lang: string]: { [key: string]: string } }, language?: string): void {
    this.config = config
    if (language) {
      this.setLanguage(language)
    }
  }

  setLanguage(language: string): void {
    this.language = this.config[language]
    if (!this.language) {
      throw Error(`Language ${language} is not present in config`)
    }
  }

  getLanguages(): string[] {
    return Object.keys(this.config)
  }

  translate(key: string): string {
    if (Object.keys(this.language).length === 0) {
      throw Error('Language is not configured')
    }
    let translated = this.language[key];
    if (translated == undefined) {
      console.warn(`Translation for key ${key} is not found for language ${this.language}`)
      return key
    }
    return translated
  }

}
