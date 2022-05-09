import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { AppComponent } from '../app.component';
import { OtherComponent } from '../other/other.component';

const components = [ShellComponent,AppComponent, OtherComponent, ];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
  MatTooltipModule,
  // ReactiveFormsModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService]
})
export class ShellModule {}
