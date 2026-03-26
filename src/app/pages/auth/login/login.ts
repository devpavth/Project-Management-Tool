import { Component, inject } from '@angular/core';
import { PrimeNGComponents } from '../../../shared/services/prime-components';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [PrimeNGComponents],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['']
  })

  submitLoginForm(){
    try {
      console.log(this.loginForm.value);

      if (this.loginForm.get('email')?.value === 'admin@gmail.com') {
        console.log('allow Navigation');
        this.router.navigate(['/home/production-plan']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
