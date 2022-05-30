import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@ts-ignore
  login: FormGroup;

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this._createLoginForm()
  }

  _createLoginForm(): void {
    this.login = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    })
  }
  _login():void{
    this.authService.login(this.login.getRawValue()).subscribe(value => {
      this.authService.setToken(value)
      // this.authService.setRefreshToken(value)
      this.router.navigate(['cars']).then(()=>{})
    })
  }

}
