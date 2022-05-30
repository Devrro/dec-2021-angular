import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

//@ts-ignore
  form: FormGroup;
  userNameError: String = '';

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.min(2), Validators.max(20), Validators.required]),
      password: new FormControl(null, [Validators.min(2), Validators.max(20), Validators.required]),
      confirm: new FormControl(null, [Validators.min(2), Validators.max(20), Validators.required]),
    }, [this._checkPasswords])
  }

  register() {
    let rawValue = this.form.getRawValue();
    delete rawValue.confirm;
    this.authService.register(rawValue).subscribe({
        next: () => {
          this.router.navigate(['login']).then()
        },
        error: e => {
          this.userNameError = e.error.username[0]
        }
      }
    )
  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirm = form.get('confirm')
    return password?.value === confirm?.value ? null : {notSame: true}
  }
}
