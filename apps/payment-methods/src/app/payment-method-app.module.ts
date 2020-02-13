import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from '../../../flight/src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    environment.production || !environment.buildIn ? BrowserModule : [],
    RouterModule.forChild([
      {
        path: 'payment-methods',
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PaymentMethodAppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PaymentMethodAppModule
    };
  }
}
