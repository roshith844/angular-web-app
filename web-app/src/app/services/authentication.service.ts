import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth)
  constructor( private auth: Auth) { }
  login(email: string, password: string): Observable<any>{
   return from(signInWithEmailAndPassword(this.auth, email, password))
  }
  signUp(name: string, email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword  (this.auth, email, password)).pipe(switchMap(({user})=>{
      return updateProfile(user, {displayName: name})
    }))
  }

  logout(){
    return from(this.auth.signOut())
  }
}
