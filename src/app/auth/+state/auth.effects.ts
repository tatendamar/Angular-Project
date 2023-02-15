import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from 'src/app/_services/auth.service';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  loadAuth$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.registerAction),
      switchMap(({request}) => {
         return this.authService.register(request).pipe(
          map((registeredUser: AuthResponseInterface) => {
            return AuthActions.registerSuccessAction({registeredUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => of(AuthActions.registerFailureAction({
            errors: errorResponse.error.msg })))
         )
         }
      )
  )
});

redirectAfterSubmit$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthActions.registerSuccessAction),
  tap(() => {
    this.router.navigateByUrl('/home');
    this.toastr.success('User registered successfully');
  })
),
{dispatch: false}
)

redirectOnSubmitError$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthActions.registerFailureAction),
  tap((err) => {
    this.router.navigateByUrl('/register');
    this.toastr.error(`failed to register user  ${err.errors}`);
  })
),
{dispatch: false}
)



  constructor(
    private actions$: Actions,
    private authService :AuthService,
     private toastr: ToastrService,
     private router: Router
    ) {}
}
