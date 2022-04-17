import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { MatTableModule } from '@angular/material/table' 
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, AuthButtonComponent, LogoutButtonComponent, ],
  imports: [BrowserModule, ApolloModule, HttpClientModule, BrowserAnimationsModule, SharedModule, AppRoutingModule, AuthModule.forRoot({
    domain: 'anoobis.eu.auth0.com',
    clientId: 'CCCBuFZalP9ZiLZJj5WExQS7dFEXQTXe'
  }),MatTableModule,MatSortModule],
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
    },
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}