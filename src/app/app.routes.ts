import { Routes } from '@angular/router';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CoffeeListComponent
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/coffee-list/coffee-list.component').then(m => m.CoffeeListComponent)
  }
];
