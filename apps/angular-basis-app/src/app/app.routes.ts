import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./routed/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'demos',
    loadComponent: () =>
      import('./routed/components/demos/demos.component').then(
        (m) => m.DemosComponent
      ),
  },
];
