import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: FlightsComponent}
    ])
  ],
  declarations: [FlightsComponent],
  exports: [FlightsComponent]
})
export class FeaturesFlightsModule {}
