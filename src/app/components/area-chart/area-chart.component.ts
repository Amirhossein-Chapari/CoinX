import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexFill
} from "ng-apexcharts";

@Component({
  selector: 'app-area-chart',
  imports: [NgApexchartsModule],
  template: `
    <div class="chart-container">
      <apx-chart
        [series]="chartOptions.series"
        [chart]="chartOptions.chart"
        [xaxis]="chartOptions.xaxis"
        [stroke]="chartOptions.stroke"
        [tooltip]="chartOptions.tooltip"
        [dataLabels]="chartOptions.dataLabels"
        [fill]="chartOptions.fill">
      </apx-chart>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      height: 400px;
    }
  `]
})
export class AreaChartComponent {
  chartOptions = {
    series: [{
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70]
    }] as ApexAxisChartSeries,
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false }
    } as ApexChart,
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    } as ApexXAxis,
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ['#5235E8'] // رنگ خط
    } as ApexStroke,
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#5235E8",
            opacity: 1
          },
          {
            offset: 100,
            color: "#717184",
            opacity: 0.1
          }
        ]
      }
    } as ApexFill,
    tooltip: {
      enabled: true,
      x: { format: "dd MMM yyyy" }
    } as ApexTooltip,
    dataLabels: {
      enabled: false
    } as ApexDataLabels
  };
}