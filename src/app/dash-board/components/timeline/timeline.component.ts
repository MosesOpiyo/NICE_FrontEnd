import { Component,OnInit } from '@angular/core';
import { FarmerprofileService } from '../../FarmerProfile/farmerprofile.service';
import { environment } from 'src/environments/environment.development';

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
  constructor(private stories:FarmerprofileService){}
  ngOnInit() {
    this.stories.getStories().subscribe((response:any)=>{
      this.posts = response
      console.log(this.posts)
    })
  }

  onFileSelected(event: any) {
    this.media = event.target.files[0];
}

  PostStories(){
    let form = new FormData();
    form.append('media',this.media),
    form.append('caption',this.caption),
    this.stories.postStories(form)
  }

}
