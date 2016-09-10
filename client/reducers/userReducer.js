import { AUTH_USER, DEAUTH_USER, FETCH_CURRENT_USER } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENT_USER:
      return {...state, ...action.payload};
    case DEAUTH_USER:
      return {};
  }

  return state;
}