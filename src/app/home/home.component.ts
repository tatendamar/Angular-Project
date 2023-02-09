import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: any;
  currentPage = 1;
  p: number = 1;
  page?: number;



  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
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

   pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
  reloadPage(): void {
    window.location.reload();
  }
}
