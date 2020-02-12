import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FeaturesShellModule } from '@rydoo/features/shell';
import {FlightAppModule} from '../../../flight/src/app/flight-app.module';
import { PaymentMethodAppModule } from '../../../payment-methods/src/app/payment-method-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Other app modules
    FlightAppModule.forRoot(),
    PaymentMethodAppModule.forRoot(),

    //feature modules
    FeaturesShellModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
