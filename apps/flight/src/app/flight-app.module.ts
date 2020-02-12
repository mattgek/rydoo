import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiCompassModule } from '@rydoo/ui/compass';


@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'flights',
        component: AppComponent
      }
    ]),
    UiCompassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FlightAppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlightAppModule
    };
  }
}
