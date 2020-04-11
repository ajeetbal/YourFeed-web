import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]  
     
  });
  }
  get f() { return this.updateForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (!this.updateForm.invalid) {
      this.registrationService.UpdateUser(this.updateForm.value).subscribe(res => {
        console.log(res);
      });
    }
}
}
