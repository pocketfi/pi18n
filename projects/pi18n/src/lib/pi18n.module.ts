import {NgModule} from '@angular/core'
import {Pi18nPipe} from './pi18n.pipe'
import {Pi18nService} from './pi18n.service'


@NgModule({
  declarations: [
    Pi18nPipe
  ],
  imports: [],
  exports: [],
  providers: [
    Pi18nService
  ]
})
export class Pi18nModule {
}
