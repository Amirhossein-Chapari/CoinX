import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-area-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent {
  // Chart Size
  view: [number, number] = [700, 400]; 

  // داده‌های نمونه
  multi: any[] = [
    {
      "name": "ایران",
      "series": [
        { "name": "۲۰۱۹", "value": 62000 },
        { "name": "۲۰۲۰", "value": 73000 },
        { "name": "۲۰۲۱", "value": 89400 }
      ]
    },
    {
      "name": "ایران",
      "series": [
        { "name": "۲۰۱۹", "value": 67000 },
        { "name": "۲۰۲۰", "value": 73000 },
        { "name": "۲۰۲۱", "value": 8400 }
      ]
    },
    {
      "name": "آلمان",
      "series": [
        { "name": "۲۰۱۹", "value": 52000 },
        { "name": "۲۰۲۰", "value": 58000 },
        { "name": "۲۰۲۱", "value": 62000 }
      ]
    }
  ];

  // تنظیمات چارت
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#5235E8', '#0E0637', '#131316']
  };

}
