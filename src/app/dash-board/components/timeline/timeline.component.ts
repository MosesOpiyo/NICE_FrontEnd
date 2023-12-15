import { Component,OnInit } from '@angular/core';
import { FarmerprofileService } from '../../FarmerProfile/farmerprofile.service';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmdeletionComponent } from '../message/confirmdeletion/confirmdeletion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  cloudinaryUrl = environment.CLOUDINARY_URL
  posts:any
  media:any
  caption:any
  user: any
  isLoading:boolean = false

  constructor(private dialog:MatDialog, private stories:FarmerprofileService, private store:AuthenticationStoreService, private snackBar:MatSnackBar,private service:AuthenticationStoreService){}

  ngOnInit(): void {
    this.store.storeProfileData()
    this.store.data$.subscribe((res:any)=>{
      this.user = res
      console.log(this.user)
    });

    this.stories.getStories().subscribe((response:any)=>{
      this.posts = response
    })
  }

  onFileSelected(event: any) {
    this.media = event.target.files[0];
  }

  PostStories(){
    if(this.media == null){
      this.snackBar.open("No Media Selected.", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }else if(this.caption == null){
      this.snackBar.open("Please Input Caption.", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    else{
      this.isLoading = true
      let form = new FormData();
      form.append('media',this.media),
      form.append('caption',this.caption),
      this.stories.postStories(form)
    }
  }

  showConfirmdelete() {
    this.dialog.open(ConfirmdeletionComponent, {
      width: '25pc',
      maxHeight: '90vh',
    })
  }

}
