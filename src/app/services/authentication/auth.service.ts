import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAuthCredentials } from '../../interfaces/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_TO_REGISTER = environment.baseUrl + environment.authentication.register;
  private API_TO_LOGIN = environment.baseUrl + environment.authentication.login;

  constructor(private http: HttpClient) {}

  register(userData: IAuthCredentials): Observable<any> {
    return this.http.post(this.API_TO_REGISTER, userData);
  }

  login(userData: IAuthCredentials): Observable<any> {
    return this.http
      .post(this.API_TO_LOGIN, userData)
      .pipe(
        tap((res: any) => {
          if (res.tokens.access) {
            localStorage.setItem('token', res.tokens.access);
            console.log('token access', res.tokens.access);
          }
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  

  logOut(): void {
    localStorage.removeItem('token');
  }
}


