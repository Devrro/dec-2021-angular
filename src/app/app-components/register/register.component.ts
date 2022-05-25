import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

//@ts-ignore
  form: FormGroup;

  constructor() {
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
    console.log(this.form)
  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirm = form.get('confirm')
    return password?.value === confirm?.value ? null : {notSame: true}
  }
}
