import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../models/user.service';
import { User } from '../../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {

  showDashboard: boolean = false;
  userEmail: string = '';
  userPassword: string = '';

  constructor( private userService:UserService , private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.userService.login(this.userEmail, this.userPassword).subscribe(
      (user :User) => {
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("Email",JSON.stringify(user.userEmail));
        const designation = user.designation;
        if (designation === 'Admin') {
          this.router.navigate(['/admin/admindashboard']);
        }
        else if (designation === 'Manager') {
          this.router.navigate(['/manager/managerdashboard']);
        }
        else if (designation === 'PMO') {
          this.router.navigate(['/pmo']);
        }
        else {
          this.router.navigate(['/employee/dashboard']);
        }
      },
      (error) => {
        this.router.navigate(["/login"])
      }
    );

    }

    isedIn: boolean = false;
    loginForm: FormGroup;
  
    title: String = "LOGIN";
  
    email: string='';
    password: string='';
     
}