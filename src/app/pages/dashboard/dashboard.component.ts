import { Component } from '@angular/core';
import { AreaChartComponent } from "../../components/area-chart/area-chart.component";
import { SharedModule } from "../../shared/shared.module";
import { HistoryTabComponent } from '../../components/tabs-content/history-tab/history-tab.component';
import { DatePickerComponent } from "../../components/date-picker/date-picker.component";
import { SelectCategoryComponent } from "../../components/select-category/select-category.component";
import { LinearGaugeComponent } from "../../components/linear-gauge/linear-gauge.component";
import { AdvancedPieChartComponent } from "../../components/advanced-pie-chart/advanced-pie-chart.component";
import { RadialbarChartComponent } from "../../components/radialbar-chart/radialbar-chart.component";
import { PolarAreaChartComponent } from "../../components/polar-area-chart/polar-area-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    AreaChartComponent,
    SharedModule,
    DatePickerComponent,
    SelectCategoryComponent,
    LinearGaugeComponent,
    AdvancedPieChartComponent,
    RadialbarChartComponent,
    PolarAreaChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  generalTabs = [
    { name: 'history', icon: 'history', content: HistoryTabComponent },
    { name: 'New trans', icon: 'plus', content: '' },
    { name: 'New', icon: 'plus', content: '' },
  ];
}
