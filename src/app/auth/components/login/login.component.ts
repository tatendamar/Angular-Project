import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { LoginRequestInterface } from '../../types/login/loginRequest.interface';
import { Store, select } from '@ngrx/store';
import { loginAction } from '../../+state/auth.actions';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { isLoggedInSelector, isSubmittingSelector, validationErrorsSelector } from '../../+state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private store: Store
      ) { }

  ngOnInit(): void {
    this.initializeValues()
  }

   initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  onSubmit(): void {

     const request: LoginRequestInterface = this.form;
     this.store.dispatch(loginAction({request}))




    // this.authService.login(email, password).subscribe({
    //   next: data => {
    //     this.tokenStorage.saveToken(data.token);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;


    //     this.roles = data.name
    //     //

    //   },
    //   error: err => {
    //     this.errorMessage = err.error.msg;
    //     this.isLoginFailed = true;
    //   }
    // });
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}
