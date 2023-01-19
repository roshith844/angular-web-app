import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { from, Observable, switchMap, of, concatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth)
  constructor( private auth: Auth) { }
  login(email: string, password: string): Observable<any>{
   return from(signInWithEmailAndPassword(this.auth, email, password))
  }
  signUp(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword  (this.auth, email, password))
  }

  //   updateProfileData(profileData: Partial<any>): Observable<any> {
  //    const user = this.auth.currentUser;
  // return of (user).pipe(
  //    concatMap((user) => {
  //       if (!user) throw new Error('Not authenticated');

  //       return updateProfile(user, profileData);
  //      })
  //   );
  //  }

  logout(){
    return from(this.auth.signOut())
  }
}
