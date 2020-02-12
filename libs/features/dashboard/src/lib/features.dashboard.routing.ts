import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardComponent } from './dasboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DasboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesDashboardRoutingModule { }

