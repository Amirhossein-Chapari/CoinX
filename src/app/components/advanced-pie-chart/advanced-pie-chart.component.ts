import { Component, HostListener } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-advanced-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './advanced-pie-chart.component.html',
  styleUrl: './advanced-pie-chart.component.scss'
})
export class AdvancedPieChartComponent {
  view: [number, number] = [window.innerWidth * 0.8, 300]; // داینامیک بر اساس عرض صفحه
  gradient: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  data = [
    { name: 'Germany', value: 40632 },
    { name: 'United States', value: 49737 },
    { name: 'France', value: 36745 },
    { name: 'United Kingdom', value: 36240 }
  ];

  valueFormatting(value: number): string {
    return `${value.toLocaleString()}`;
  }

  nameFormatting(name: string): string {
    return `${name.toUpperCase()}`;
  }

  constructor() {
    this.updateChartSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateChartSize();
  }

  updateChartSize() {
    const width = window.innerWidth * 0.8; // 80% عرض صفحه
    const height = width < 600 ? 250 : 300; // اگر کوچک شد، ارتفاع کمتر بشه
    this.view = [width, height];
  }
}
