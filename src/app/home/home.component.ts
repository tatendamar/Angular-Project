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

  itemsPerPage = 10;
  totalItems: any
  page : any = 0;




  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.page = 0 ? this.page : 1;
    this.getUsers()
  }

  getUsers(){


    this.userService.getUsers(this.page, this.itemsPerPage).subscribe({
      next: data => {
        console.log(data);
        this.content = data.users;
         this.totalItems = data.users.totalItems;
        //  this.itemsPerPage = data.users.totalPages;

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

   pageChanged(event: any): void {
    this.page = event;
    this.getUsers()
  }

   handlePageSizeChange(event: any): void {
    this.itemsPerPage = event.target.value;
    this.page = 1;
    this.getUsers()
  }


  reloadPage(): void {
    window.location.reload();
  }
}
