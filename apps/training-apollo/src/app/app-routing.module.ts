import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LogoutButtonComponent} from './logout-button/logout-button.component';
import {AuthButtonComponent} from './auth-button/auth-button.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    // {
    //   path: '',
    //   component: LinkListComponent,
    //   pathMatch: 'full'
    // },
    {
      path: 'create',
      component: LogoutButtonComponent,
      pathMatch: 'full'
    },
    {
      path: '',
      component: LogoutButtonComponent,
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
