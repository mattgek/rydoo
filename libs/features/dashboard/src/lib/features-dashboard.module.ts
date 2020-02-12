import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesDashboardRoutingModule } from './features.dashboard.routing';
import { DasboardComponent } from './dasboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    LayoutModule,

    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
   FeaturesDashboardRoutingModule
  ],
  exports: [DasboardComponent]
})
export class FeaturesDashboardModule {}
