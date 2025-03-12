import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDrawerModule,
    ThemeToggleComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'

})
export class MainLayoutComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isMobile = false;
  isDrawerOpen = false;
  private breakpointSubscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.isCollapsed = this.isMobile;
        if (!this.isMobile) {
          this.isDrawerOpen = false;
        }
      });
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
