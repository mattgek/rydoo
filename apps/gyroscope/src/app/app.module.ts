import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FeaturesShellModule } from '@rydoo/features/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [


    //feature modules
    FeaturesShellModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
