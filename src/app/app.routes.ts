import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: Login },
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout').then((c) => c.Layout),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then((c) => c.Profile),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
