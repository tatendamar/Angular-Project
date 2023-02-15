import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../types/login/loginRequest.interface';



export const registerAction = createAction(
 ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ registeredUser: AuthResponseInterface }>()
);


export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors:  BackendErrorsInterface}>()
);

//LOGIN


export const loginAction = createAction(
 ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const  loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ loginUser: AuthResponseInterface }>()
);


export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors:  BackendErrorsInterface}>()
);
