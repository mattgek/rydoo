import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', loadChildren: () => import('@rydoo/feature/dashboard').then(m => m.FeaturesDashboardModule)
  },
  {
    path: 'flights', loadChildren: () => import('../../../flight/src/app/flight-app.module').then(m => m.FlightAppModule)
  },
  {
    path: 'payment-methods', loadChildren: () => import('../../../payment-methods/src/app/payment-method-app.module').then(m => m.PaymentMethodAppModule)
  },
  {
    path: 'flights-feature', loadChildren: () => import('@rydoo/feature/flights').then(m => m.FeaturesFlightsModule)
  },
  {
    path: 'payment-methods-feature', loadChildren: () => import('@rydoo/feature/payment-methods').then(m => m.FeaturesPaymentMethodsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
