import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: any;
  id?: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('uuid');
    this.getUser(id);
  }

  getUser(uuid: any){
   this.userService.getUser(uuid).subscribe({
       next: data => {
        console.log(data);
        this.content = data.user;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    })
  }
}
