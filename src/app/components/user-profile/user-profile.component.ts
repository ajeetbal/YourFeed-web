import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateForm: FormGroup;
  username:String;
  verified = false;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(res => {
      console.log(res);
      this.updateForm.get('firstName').setValue(res.data.firstName);
      this.updateForm.get('lastName').setValue(res.data.lastName);
      this.updateForm.get('email').setValue(res.data.email);
      this.updateForm.get('username').setValue(res.data.username);
      this.updateForm.get('gender').setValue(res.data.gender);
      this.updateForm.get('dob').setValue(res.data.dob);
      this.verified = res.data.emailVarified;
      this.username=res.data.username;
    });

    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      dob: ['']
    });
  }
  get profile() { return this.updateForm.controls; }
  onUpdate() {
    this.profileService.updateProfile(this.updateForm.value).subscribe(res=>{
      console.log(res.data);
      
    })
  }


}
