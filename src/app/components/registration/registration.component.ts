import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  regGroup: FormGroup;
  isUsernameAvailable: Boolean;
  firstName: FormControl = new FormControl("", [
    Validators.required, Validators.minLength(3)
  ]);
  lastName: FormControl = new FormControl("", [
    Validators.required, Validators.minLength(3)
  ]);
  email: FormControl = new FormControl("", [
    Validators.required, Validators.email
  ]);
  username: FormControl = new FormControl("", [
    Validators.required, Validators.minLength(4), Validators.maxLength(70)
  ]);
  password: FormControl = new FormControl("", [
    Validators.required, Validators.minLength(5)
  ]);

  constructor(fb: FormBuilder, private registrationService: RegistrationService) {
    this.regGroup = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
    console.log("[Registration] initialized");
  }

  onSubmit() {
    this.registrationService.registerUser(this.regGroup.value).subscribe(res => {
      console.log(res);
    });
  }
  checkUserNameAvailability(event) {
    this.registrationService.checkUserNameAvailability(event.target.value).subscribe(res => {
      this.isUsernameAvailable = res.data;
    });
  }


}
