import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { UiCompassModule } from '@rydoo/ui/compass';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'flight-feature', pathMatch: 'full', component: FlightsComponent }
    ]),
    UiCompassModule
  ],
  declarations: [FlightsComponent],
  exports: [FlightsComponent]
})
export class FeaturesFlightsModule {}
