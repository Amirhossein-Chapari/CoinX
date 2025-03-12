import { Component } from '@angular/core';
import { AreaChartComponent } from "../../components/area-chart/area-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [AreaChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
