import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', loadChildren: () => import('@rydoo/features/dashboard').then(m => m.FeaturesDashboardModule)
  },
  {
    path: 'flights', loadChildren: () => import('../../../flight/src/app/flight-app.module').then(m => m.FlightAppModule)
  },
  {
    path: 'payment-methods', loadChildren: () => import('../../../payment-methods/src/app/payment-method-app.module').then(m => m.PaymentMethodAppModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
