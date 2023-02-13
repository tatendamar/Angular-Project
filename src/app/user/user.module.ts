import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';


const routes = [
  { path: 'profile/:uuid', component: ProfileComponent },
  { path: 'admin/:uuid', component: BoardAdminComponent }
]


@NgModule({
  declarations: [
    BoardAdminComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
     RouterModule.forChild(routes),
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class UserModule { }
