import { UserState, SetUser } from './types';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state: UserState = INITIAL_STATE, action: SetUser) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
