import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';



export const authFeatureSelector = createFeatureSelector<
AuthStateInterface
>(
  fromAuth.authFeatureKey
);


export const isSubmittingSelector =  createSelector(
   authFeatureSelector,
   (authState: AuthStateInterface) => authState.isSubmitting
)


export const validationErrorsSelector =  createSelector(
   authFeatureSelector,
   (authState: AuthStateInterface) => authState.validationErrors
   )


export const isLoggedInSelector =  createSelector(
   authFeatureSelector,
   (authState: AuthStateInterface) => {
    console.log(authState.isLoggedIn)
    return authState.isLoggedIn
  }
   )
