import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'flights',
        component: AppComponent,
      }
    ])
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
