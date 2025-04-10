import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { authInterceptor } from './services/authentication/auth-interceptor.service';
import { NgApexchartsModule } from 'ng-apexcharts';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzIcons(icons),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),

      provideHttpClient(
        withInterceptors([authInterceptor])
      ),

    importProvidersFrom(NgxChartsModule),
    importProvidersFrom(NgApexchartsModule)
  ]
    
};
