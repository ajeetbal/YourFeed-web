import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  username: FormControl = new FormControl("", [Validators.required]);
  password: FormControl = new FormControl("", [Validators.required]);
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginGroup = fb.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {
  }
  onLogin() {
    this.loginService.loginUser(this.loginGroup.value).subscribe(res => {
      console.log("in login service");
      localStorage.setItem("token", res.data);
      console.log("token saved in localStorage");
    });
  }

}
