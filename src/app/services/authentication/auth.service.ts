import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Register } from '../../interfaces/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_TO_LOGIN = environment.API_TO_LOGIN;
  private API_TO_REGISTER = environment.API_TO_REGISTER;
  http = inject(HttpClient);

  register(userData: Register): Observable<Register> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('📤 Register Headers:', headers.keys());

    return this.http.post<Register>(this.API_TO_REGISTER, userData, { headers });
  }

  login(userData: Login): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('📤 Login Headers:', headers.keys());

    return this.http.post<any>(this.API_TO_LOGIN, userData, { headers }).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);
          console.log('🔑 Token saved:', response.token);
        }
      })
    );
  }
}
