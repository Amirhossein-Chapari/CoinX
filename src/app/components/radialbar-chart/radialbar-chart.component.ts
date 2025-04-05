import { Component } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: string[];
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-radialbar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './radialbar-chart.component.html',
  styleUrls: ['./radialbar-chart.component.scss']
})
export class RadialbarChartComponent {
  chartOptions: ChartOptions = {
    series: [90],
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // optional
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: (val: number) => `${val}`,
            color: '#111',
            fontSize: '30px',
            show: true,
          }
        }
        
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#5235E8'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Total Spent'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300
          }
        }
      }
    ]
  };
}
