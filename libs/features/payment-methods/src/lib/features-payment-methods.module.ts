import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentMethodsComponent } from './payment-methods.component';
import { UiCompassModule } from '@rydoo/ui/compass';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', component: PaymentMethodsComponent }
    ]),
    UiCompassModule
  ],
  declarations: [PaymentMethodsComponent],
  exports: [PaymentMethodsComponent]
})
export class FeaturesPaymentMethodsModule {}
