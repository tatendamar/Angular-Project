import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureKey = 'auth';

export interface State {

}

export const initialState: AuthStateInterface = {
isSubmitting: false,
registeredUser: null,
isLoggedIn: false,
validationErrors: null
};

const authReducer = createReducer(
  initialState,

  on(
    AuthActions.registerAction,
    (state, action): AuthStateInterface => ({
     ...state,
    isSubmitting: true,
    isLoggedIn: false,
    validationErrors: null
   })),
   on(AuthActions.registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      registeredUser: action.registeredUser
    })),

  on(AuthActions.registerFailureAction, (state, action): AuthStateInterface => ({
     ...state,
     isSubmitting: false,
     isLoggedIn: false,
     validationErrors: action.errors
  })),

   on(
    AuthActions.loginAction,
    (state, action): AuthStateInterface => ({
     ...state,
    isSubmitting: true,
    isLoggedIn: false,
    validationErrors: null
   })),
   on(AuthActions.loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      registeredUser: action.loginUser
    })),

  on(AuthActions.loginFailureAction, (state, action): AuthStateInterface => ({
     ...state,
     isSubmitting: false,
     isLoggedIn: false,
     validationErrors: action.errors
  })),

);


export function reducers(state: AuthStateInterface, action: Action){
  return authReducer(state, action)
}
