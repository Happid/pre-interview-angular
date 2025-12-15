import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // Lazy Loading Component
    loadComponent: () => import('./pages/home/home').then(c => c.Home),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    // Lazy Loading Component
    loadComponent: () => import('./pages/profile/profile').then(c => c.Profile),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    // Lazy Loading Component
    loadComponent: () => import('./pages/profile/detail/detail').then(c => c.Detail),
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    // Lazy Loading Component
    loadComponent: () => import('./pages/not-found/not-found').then(c => c.NotFound),
  },
  { path: '**', redirectTo: 'not-found' }
];
