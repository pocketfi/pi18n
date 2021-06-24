import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Pi18nService {

  constructor() {
  }

  translate(key: string): string {
    return 'banana'
  }

}
