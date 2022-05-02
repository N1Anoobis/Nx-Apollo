import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'nx-apollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  isLoggedIn$: Observable<boolean>;

  constructor( private auth: AuthService) {

  }


  ngOnInit(): void {
      this.isLoggedIn$ = this.auth.isLoggedIn;
  }
}
