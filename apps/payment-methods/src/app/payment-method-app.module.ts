import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from '../../../flight/src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    environment.production || !environment.buildIn ? BrowserModule : [],
    BrowserAnimationsModule,
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
