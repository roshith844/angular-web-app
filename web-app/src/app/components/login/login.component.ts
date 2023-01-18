import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router,
     private toast: HotToastService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    const { email, password } = this.loginForm.value;  
    if (!this.loginForm.valid || !email || !password) {
      return;
    }
    if (this.loginForm.valid) {
      return;
    }
  this.authService.login(email, password).pipe(
    this.toast.observe({
      success: 'logged in succusfully',
      loading: 'logging in..',
      error: 'there was an error'
    })).subscribe(()=>{
  this.router.navigate(['/home'])
   })
  }

  ngOnInit() {

  }
}
