import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  // Define skip URLs before using them
  const skipAuthUrls = ['/api/accounts/register/', '/api/accounts/login/'];
  const shouldSkip = skipAuthUrls.some(url => req.url.includes(url));
  
  console.log('Interceptor Debug:', {
    url: req.url,
    token: token,
    shouldSkip: shouldSkip
  });
  
  // Only clone and modify the request if we have a token and shouldn't skip
  if (token && !shouldSkip) {
    console.log('Adding Authorization header');
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(authReq);
  }
  
  console.log('Skipping Authorization header');
  return next(req);
};