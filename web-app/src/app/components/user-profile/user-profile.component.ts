import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user$ = this.authService.currentUser$
  constructor(private authService: AuthenticationService, private toast: HotToastService ,  private imageUploadService: ImageUploadService){

  }
  uploadImage(event: any, user: User){
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        })), concatMap(photoURL=>this.authService.updateProfileData({photoURL}))
        // should add subscribe()
  }

}
