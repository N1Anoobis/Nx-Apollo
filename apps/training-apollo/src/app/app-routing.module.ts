import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',
   component: HomeComponent, 
   canActivate: [AuthGuard] },
  {
    path: 'create',
    component: OtherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
