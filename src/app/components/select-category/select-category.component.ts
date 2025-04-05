import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-select-category',
  imports: [FormsModule, NzSelectModule],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.scss'
})
export class SelectCategoryComponent implements OnInit {
  

  selectedValue: string | null = null;
  listOfOption: string[] = [];
  readonly nzFilterOption = (): boolean => true;

  constructor(private tasksService: TasksService, private http: HttpClient) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((res: any) => {console.log('fsdfdsfsd',res);
    })
  }

  search(value: string): void {
    this.http
      .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
      .subscribe(data => {
        this.listOfOption = data.result.map(([item]) => item);
      });
  }
}
