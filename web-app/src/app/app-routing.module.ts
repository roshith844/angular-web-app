import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {HomeComponent} from './components/home/home.component'
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path: '', pathMatch: 'full',
   component: LandingComponent
}, {
  path: 'login',
  component: LoginComponent,
  ...canActivate(redirectLoggedInToHome),
},
{
  path: 'signup',
  component: SignUpComponent,
  ...canActivate(redirectLoggedInToHome),
},
{
  path: 'home',
  component: HomeComponent,
  ...canActivate(redirectUnauthorizedToLogin)
},
{
  path: 'home/profile',
  component: UserProfileComponent,
  ...canActivate(redirectUnauthorizedToLogin)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
