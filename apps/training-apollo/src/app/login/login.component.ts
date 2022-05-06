import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'nx-apollo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
   
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.isLoggedIn$.subscribe(res=>console.log(res) )
    console.log('init Login');
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
