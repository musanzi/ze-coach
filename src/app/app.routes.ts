import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadChildren: () => import('./landing/landing.routes').then((m) => m.landingRoutes),
  },
];
