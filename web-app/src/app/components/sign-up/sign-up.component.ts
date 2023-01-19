import { Component } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
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
    private toast: HotToastService, private fb : NonNullableFormBuilder,  private usersService: UsersService) {}
    // signUpForm = this.fb.group({
    //   name: [''],
    //   email: [''],
    //   password: [''],
    //   confirmPassword: ['']
    //  },{validators: passwordsMatchValidator() })

    //  get email() {
    //   return this.signUpForm.get('email');
    // }
  
    // get password() {
    //   return this.signUpForm.get('password');
    // }
  
    // get confirmPassword() {
    //   return this.signUpForm.get('confirmPassword');
    // }
  
    // get name() {
    //   return this.signUpForm.get('name');
    // }
    // submit() {
    //   const { name, email, password } = this.signUpForm.value;
  
    //   if (!this.signUpForm.valid || !name || !password || !email) {
    //     return;
    //   }
  
    //   this.authService
    //     .signUp(email, password)
    //     .pipe(
    //       switchMap(({ user: { uid } }) =>
    //         this.usersService.addUser({ uid, email, displayName: name })
    //       ),
    //       this.toast.observe({
    //         success: 'Congrats! You are all signed up',
    //         loading: 'Signing up...',
    //         error: ({ message }) => `${message}`,
    //       })
    //     )
    //     .subscribe(() => {
    //       this.router.navigate(['/home']);
    //     });
    // }
        // this.authService
        // .signUp(email, password)
        // .pipe(
        //   switchMap (({ user: { uid } }) =>
        //     this.usersService.addUser({ uid, email, displayName: name })
        //   ),
        //   this.toast.observe({
        //     success: 'Congrats! signed up',
        //     loading: 'Signing up...',
        //     error: ({ message }) => `${message}`,
        //   })
        // )
        // .subscribe(() => {
        //   this.router.navigate(['/home']);
        // });
        getUserFormData(data: any){
          console.log(data)
        }
        
      }

