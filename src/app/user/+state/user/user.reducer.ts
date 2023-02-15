import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserStateInterface } from '../../types/userState.interface';

export const userFeatureKey = 'user';

export interface State extends EntityState<UserStateInterface> {
 isLoaded: boolean,
 getUser: null,
 validationErrors: null
}

export const initialState: UserStateInterface = {
  user: null,
  isLoaded: false,
  validationErrors: null
};

export const userReducer = createReducer(
  initialState,

   on(
    UserActions.getUserAction,
    (state, action): UserStateInterface => ({
     ...state,
    isLoaded: false,
    validationErrors: null
   })),
    on(UserActions.getUserSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoaded: true,
      user: action.user
    })),

    on(UserActions.getUserFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoaded: false,
      validationErrors: action.errors
    })),

);


export function reducers(state: UserStateInterface, action: Action){
  return userReducer(state, action)
}
