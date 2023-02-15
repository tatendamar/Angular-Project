import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { UserStateInterface } from '../../types/userState.interface';

export const userFeatureSelector = createFeatureSelector<UserStateInterface>(
  fromUser.userFeatureKey
);



export const getUserSelector =  createSelector(
   userFeatureSelector,
   (userState: UserStateInterface) => {
     console.log(userState.user)
    return userState.user
  }
)
