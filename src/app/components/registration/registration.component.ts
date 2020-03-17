import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from "@angular/forms";
import { RegistrationService } from "src/app/services/registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  regGroup: FormGroup;
  isUsernameAvailable: boolean;
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
    Validators.required, Validators.minLength(4), Validators.maxLength(70),
    Validators.pattern(/^[a-zA-Z0-9._-]{3,}$/), UsernameAvailable(this.isUsernameAvailable)
  ]);
  password: FormControl = new FormControl("", [
    Validators.required, Validators.minLength(5)
  ]);
  confirmPassword: FormControl = new FormControl("", [
    Validators.required, PasswordsMatch(this.password)
  ]);

  constructor(fb: FormBuilder, private registrationService: RegistrationService) {
    this.regGroup = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
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

const PasswordsMatch = (compared: AbstractControl): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const matches = control.value === compared.value;
    return !matches ? { nomatch: true } : null;
  };
};

const UsernameAvailable = (isTrue: boolean): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return !isTrue ? { unavailable: true } : null;
  };
};
