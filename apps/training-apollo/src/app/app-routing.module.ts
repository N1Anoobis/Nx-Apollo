import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthButtonComponent} from './auth-button/auth-button.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    // {
    //   path: '',
    //   component: LinkListComponent,
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'create',
    //   component: CreateLinkComponent,
    //   pathMatch: 'full'
    // },
    {
      path: 'login',
      component: AuthButtonComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
