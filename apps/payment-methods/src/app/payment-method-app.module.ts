import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
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
