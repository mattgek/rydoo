import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesShellModule } from '@rydoo/features/shell';
import { PaymentMethodAppModule } from '@rydoo/app/payment-methods';
import { AppRoutingModule } from './app.routing';
import { FlightAppModule } from '@rydoo/app/flight';

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
