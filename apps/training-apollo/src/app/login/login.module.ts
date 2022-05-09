import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule,loginRoutingComponents } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [loginRoutingComponents],
  imports: [CommonModule,LoginRoutingModule, ReactiveFormsModule, MatFormFieldModule,  MatCardModule,MatInputModule, MatButtonModule,],

})
export class LoginModule {}

