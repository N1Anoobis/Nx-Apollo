import { Component, Inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-apollo-logout-button',
  styleUrls: ['./logout-button.component.scss'],
  templateUrl: './logout-button.component.html',
  styles: [],
})
export class LogoutButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private router: Router) {}
}