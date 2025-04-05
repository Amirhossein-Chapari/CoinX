import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    NzIconModule,
    NzTabsModule,
    CommonModule,
  ],
exports: [
  TabsComponent
]
})
export class SharedModule { }
