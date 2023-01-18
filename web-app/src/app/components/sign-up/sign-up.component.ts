import { Component } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authService: AuthenticationService, private router: Router,
    private toast: HotToastService, private fb : NonNullableFormBuilder) {}
    signUpForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
     },{validators: passwordsMatchValidator() })

     get email() {
      return this.signUpForm.get('email');
    }
  
    get password() {
      return this.signUpForm.get('password');
    }
  
    get confirmPassword() {
      return this.signUpForm.get('confirmPassword');
    }
  
    get name() {
      return this.signUpForm.get('name');
    }
      submit() {}
}
