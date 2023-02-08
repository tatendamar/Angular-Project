import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: any;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        console.log(data);
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

   getUser(uuid: string){
    this.router.navigate([`/admin/${uuid}`]);
  }

   editUser(uuid: string){
    this.router.navigate([`/profile/${uuid}`]);
  }

  deleteUser(uuid: string){
    this.userService.deleteUser(uuid).subscribe({
        next: data => {
          this.reloadPage();
          this.toastr.warning('User deleted successfully');
          return data;

      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });


  }

  reloadPage(): void {
    window.location.reload();
  }
}
