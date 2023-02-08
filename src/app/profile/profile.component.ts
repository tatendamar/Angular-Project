import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) { }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('uuid');
  }

  onSubmit(): void {
    this.currentUser = this.route.snapshot.paramMap.get('uuid');
    console.log(this.currentUser);

    const {
      hobbies,
      occupation,
      address } = this.form;

    this.userService.updateUser(
     this.currentUser,
      hobbies,
      occupation,
      address
      ).subscribe({
      next: data => {
       this.router.navigate([`/admin/${this.currentUser}`]);
       this.toastr.success('Successfully edited user');
      },
      error: err => {
        
        this.errorMessage = err.msg;
        this.isLoginFailed = true;
        this.toastr.error(err.msg)
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
