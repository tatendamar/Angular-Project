import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import { UserService } from 'src/app/_services/user.service';
import { UserResponseInterface } from '../../types/userResponse.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class UserEffects {


  // loadUser$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(UserActions.getUserAction),
  //        switchMap(({requestUUID}) => {
  //        return
  //        this.userService.getUser(requestUUID).pipe(
  //         map((user: UserResponseInterface) => {
  //           return UserActions.getUserSuccessAction({user})
  //         }),
  //         catchError((errorResponse: HttpErrorResponse) => of(UserActions.getUserFailureAction({
  //           errors: errorResponse.error.msg })))
  //        )
  //        }
  //   ))
  // });


  constructor(private actions$: Actions, private userService: UserService) {}

}
