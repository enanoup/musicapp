import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';


const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      // Pages tiene dentro de HTML otro <ruter-outlet> donde cargara el contenido de los children
      children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'graficas1', component: Graficas1Component},
        { path: 'progress', component: ProgressComponent},
      ]
    }
  ];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
