import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    BrowserModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
