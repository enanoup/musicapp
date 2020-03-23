import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    // Pages tiene dentro de HTML otro <ruter-outlet> donde cargara el contenido de los children
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Graficas1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
