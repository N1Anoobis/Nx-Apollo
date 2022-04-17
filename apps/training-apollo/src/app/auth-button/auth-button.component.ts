import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'nx-apollo-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements AfterViewInit {
  @ViewChild('btn') btn: ElementRef<HTMLElement>;
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  ngAfterViewInit(): void {
      this.btn.nativeElement.click();
  }
}
