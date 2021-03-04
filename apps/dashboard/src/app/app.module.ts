import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesDashboardModule } from '@rydoo/features/dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeaturesDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
