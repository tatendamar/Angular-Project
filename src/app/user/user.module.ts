import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    BoardAdminComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class UserModule { }
