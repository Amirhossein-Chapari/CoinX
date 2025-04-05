import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-date-picker',
  imports: [FormsModule, NzDatePickerModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}


