import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IAuthCredentials } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userData: IAuthCredentials = {
    username: '',
    password: '',
  };
  isLoading = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  handleRegister() {
    this.isLoading = true;
    console.log('Sending register data:', this.userData);
  
    this.authService.register(this.userData).pipe(
      catchError((error) => {
        this.isLoading = false;
        console.error('Register error:', error);
        this.toastr.error('Something went wrong, please try again.', '', {
          positionClass: 'toast-bottom-right',
          timeOut:5000,
          closeButton:false,
          progressBar:true,
          tapToDismiss:true
        });
        
        return of(null);
      })
    ).subscribe((response) => {
      if (response) {
        console.log('received response:', response);
        this.toastr.success('Welcome!', 'Registration Successful',{
          positionClass: 'toast-bottom-right',
          timeOut:5000,
          closeButton:false,
          progressBar:true,
          tapToDismiss:true
        });
        this.router.navigate(['/login']);
      }
      this.isLoading = false;
    });
  }
  

}
