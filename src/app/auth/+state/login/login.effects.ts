import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AuthActions from '../auth.actions';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthResponseInterface } from '../../types/authResponse.interface';


@Injectable()
export class LoginEffects {

  loadLogin$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.loginAction),
      switchMap(({request}) => {
         return this.authService.login(request).pipe(
          map((loginUser: AuthResponseInterface) => {
            return AuthActions.loginSuccessAction({loginUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => of(AuthActions.loginFailureAction({
            errors: errorResponse.error.msg })))
         )
         }
      )
  )
});

redirectAfterLogin$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthActions.loginSuccessAction),
  tap(() => {
    this.router.navigateByUrl('/home');
    this.toastr.success('User registered successfully');
  })
),
{dispatch: false}
)

redirectOnLoginError$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthActions.loginFailureAction),
  tap((err) => {
    this.router.navigateByUrl('/login');
    this.toastr.error(`failed to login user  ${err.errors}`);
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
