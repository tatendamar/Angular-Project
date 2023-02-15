import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserResponseInterface } from '../../types/userResponse.interface';
import { UserQueryInterface } from '../../types/userQuery.interface';

export const getUserAction = createAction(
 ActionTypes.GET_USER,
  props<{requestUUID: UserQueryInterface }>()
)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{ user: UserResponseInterface }>()
);


export const getUserFailureAction = createAction(
  ActionTypes.GET_USER_FAILURE,
  props<{ errors:  BackendErrorsInterface}>()
);



