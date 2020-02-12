import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiCompassModule } from '@rydoo/ui/compass';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'payment-methods',
        component: AppComponent
      }
    ]),
    UiCompassModule
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
