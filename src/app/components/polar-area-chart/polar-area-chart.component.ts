import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend,
  ApexFill,
  ApexResponsive,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-polar-area-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './polar-area-chart.component.html',
  styleUrl: './polar-area-chart.component.scss',
})
export class PolarAreaChartComponent {
  public chartOptions: ChartOptions = {
    series: [42, 47, 52, 58, 65],
    chart: { type: 'polarArea' },
    labels: [],
    fill: { 
      opacity: 1,
      type: 'solid', 
      colors: ['#E7E3FC', '#717184', '#5235E8', 'blue', 'dark-blue'], 
    },
    plotOptions: {
      polarArea: {
        rings: { strokeWidth: 0 },
        spokes: { strokeWidth: 0 }
      }
    },
    legend: { position: 'right' },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ],
    tooltip: {
      y: {
        formatter: (val: number, opts: any) => {
          const total = opts.series.reduce((a: number, b: number) => a + b, 0);
          const percent = ((val / total) * 100).toFixed(1);
          return `${val} (${percent}%)`;
        }
      }
    }
  };
}
