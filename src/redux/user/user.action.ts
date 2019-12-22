import { User } from 'firebase';
import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (user: User) => ({
  type: SET_CURRENT_USER,
  payload: user
});
