import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (c) => c.LandingPageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./authentication/ui/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: 'log-in',
        loadComponent: () =>
          import('./authentication/feature/log-in/log-in.component').then(
            (c) => c.LogInComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./authentication/feature/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
    ],
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact/feature/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events.component').then((c) => c.EventsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
