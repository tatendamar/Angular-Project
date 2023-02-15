import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../+state/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedInSelector, isSubmittingSelector, validationErrorsSelector } from '../../+state/auth.selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterRequestInterface = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: '',
    hobbies: '',
    occupation: '',
    address: ''
  };


  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  errorMessage = '';

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
    private store: Store
    ) { }

  ngOnInit(): void {

    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
        const request: RegisterRequestInterface = this.form;
        this.store.dispatch(registerAction({request}))
  }

}
