import { User } from 'firebase';
import { UserActionTypes } from './types';

export const setCurrentUser = (user: User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
