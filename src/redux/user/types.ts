import { User } from 'firebase';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface UserState {
  currentUser: User | null;
}

export interface SetUser {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

export type UserActionTypes = SetUser;
