import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Login } from '../../../interfaces/interfaces';
import { AuthService } from '../../../services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NzIconModule, RouterLink, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userData: Login = {
    username: '',
    password: '',
  };
  isLoading = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  handleLogin() {
    this.isLoading = true;

    console.log('🔹 Sending login data:', this.userData);

    this.authService
      .login(this.userData)
      .pipe(
        catchError((error) => {
          this.isLoading = false;
          console.error('❌ Login error:', error);
          this.toastr.error(error,'',{
            positionClass: 'toast-bottom-right',
            timeOut:5000,
            closeButton:false,
            progressBar:true,
            tapToDismiss:true
          });
          return of(null);
        })
      )
      .subscribe((response) => {
        this.isLoading = false;
        if (response) {
          console.log('✅ Login successful, received response:', response);
          console.log('🔑 Token:', response.token);
          this.toastr.success('Welcome to the system!', 'Login Successful', {
            positionClass: 'toast-bottom-right',
            timeOut:5000,
            closeButton:false,
            progressBar:true,
            tapToDismiss:true
          });
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
