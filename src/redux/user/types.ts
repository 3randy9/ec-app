import { User } from 'firebase';

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export interface UserState {
  currentUser: User | null;
}

export interface SetUser {
  type: typeof UserActionTypes.SET_CURRENT_USER;
  payload: User;
}

export type UserActionTypes = SetUser;
