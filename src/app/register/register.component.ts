import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    gender: null,
    hobbies: null,
    occupation: null,
    address: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
     if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

    }
  }

  onSubmit(): void {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      gender,
      hobbies,
      occupation,
      address } = this.form;

    this.authService.register(
      username,
      email,
      password,
      first_name,
      last_name,
      gender,
      hobbies,
      occupation,
      address
      ).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.isLoggedIn = true;


        this.toastr.success('User registered successfully');
      },
      error: err => {
        this.errorMessage =err.error.msg;
        this.isSignUpFailed = true;
      }
    });
  }



  reloadPage(): void {
    window.location.reload();
  }
}
