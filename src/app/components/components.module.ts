import { NgModule } from '@angular/core';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    IncrementComponent,
    ChartComponent
  ],
  exports: [
    IncrementComponent,
    ChartComponent
  ],
  imports: [
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
