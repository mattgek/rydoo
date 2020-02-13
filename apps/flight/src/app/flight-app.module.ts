import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    environment.production || !environment.buildIn ? BrowserModule : [],
    BrowserAnimationsModule,
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
