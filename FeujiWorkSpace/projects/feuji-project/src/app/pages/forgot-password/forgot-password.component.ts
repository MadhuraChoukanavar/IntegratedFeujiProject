import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  formInvalid(): boolean {
    return this.email === '' || this.newPassword === '' || this.confirmPassword === '' || this.newPassword !== this.confirmPassword;
  }

  submitForm() {
    // Add your form submission logic here
    this.router.navigate(['/login']);
  }

}
