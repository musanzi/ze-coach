import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.routes').then((m) => m.landingRoutes),
  },
];
