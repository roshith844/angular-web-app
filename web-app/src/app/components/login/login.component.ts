import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
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
     private toast: HotToastService, private fb : NonNullableFormBuilder) {}
     
     loginForm = this.fb.group({
      email: [''],
      password: ['']
     })
  
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    const { email, password } = this.loginForm.value;
    if ( !email || !password) {
      console.log("not valid")
      return;
    }
  this.authService.login(email, password).pipe(
    this.toast.observe({
      success: 'logged in succusfully',
      loading: 'logging in..',
      error: ({ message }) => `There was an error: ${message} `,
    })).subscribe(()=>{
  this.router.navigate(['/home'])
   })
  }

  ngOnInit() {
  }
}
