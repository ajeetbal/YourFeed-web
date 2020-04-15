import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  categorySelectedFile: File;
  imageUrl: any;
  constructor(private profile: ProfileService) { }

  ngOnInit(): void {
  }
 
  onFileUpload(event) {
    this.categorySelectedFile = <File>event.target.files[0];
    console.log(event); // We just print out data bubbled up from event emitter.
  }

  uploadImage(){
     this.profile.uploadProfileImage(this.categorySelectedFile)
     .subscribe(res=>{
     console.log(res);
     });
  }

  downloadImage(){
    this.profile.getUploadImage()
    .subscribe(res=>{           
     this.readFile(res)
     this.imageUrl = this.readFile(res);
     console.log(this.imageUrl);     
    });
  }

  private readFile(blob: Blob): Observable<string> {
    return Observable.create(obs => {
      const reader = new FileReader();
      reader.onerror = err => obs.error(err);
      reader.onabort = err => obs.error(err);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();

      return reader.readAsDataURL(blob);
    });
  }
}
