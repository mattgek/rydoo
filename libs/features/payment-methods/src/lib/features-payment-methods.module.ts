import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentMethodsComponent } from './payment-methods.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', component: PaymentMethodsComponent}
    ])
  ],
  declarations: [PaymentMethodsComponent],
  exports: [PaymentMethodsComponent]
})
export class FeaturesPaymentMethodsModule {}
