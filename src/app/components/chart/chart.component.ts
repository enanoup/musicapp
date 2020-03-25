import { Component, OnInit, Input } from '@angular/core';

import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: []
})
export class ChartComponent implements OnInit {

    // Doughnut
    @Input() labels: Label[] = [];
    @Input() data: MultiDataSet = [];
    @Input() type: ChartType;

  constructor() { }

  ngOnInit(): void {
  }

}
