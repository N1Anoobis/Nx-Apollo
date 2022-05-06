import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { MatTableModule } from '@angular/material/table' 
import { MatSortModule } from '@angular/material/sort';
import { OtherComponent } from './other/other.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShellModule } from './shared/shell.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [LoginComponent, WelcomeComponent ],
  imports: [BrowserModule, ApolloModule, HttpClientModule, BrowserAnimationsModule, RouterModule, AppRoutingModule, AuthModule.forRoot({
    domain: 'anoobis.eu.auth0.com',
    clientId: 'CCCBuFZalP9ZiLZJj5WExQS7dFEXQTXe'
  }),MatTableModule,MatSortModule, 
  FormsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  ShellModule,
  
 ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:5000/graphql'        
          }),
        };
      },
      deps: [HttpLink], 
    },MediaMatcher,
    // AuthService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}