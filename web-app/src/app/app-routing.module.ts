import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {HomeComponent} from './components/home/home.component'
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', pathMatch: 'full',
   component: LandingComponent
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'home',
  component: HomeComponent


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
