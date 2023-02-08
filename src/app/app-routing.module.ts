import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/authguard.service';
import { BoardAdminComponent } from './user/components/board-admin/board-admin.component';
import { ProfileComponent } from './user/components/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:uuid', component: ProfileComponent },
  { path: 'admin/:uuid', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
