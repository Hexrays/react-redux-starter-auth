import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_CURRENT_USER
} from '../actions/types';

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function(dispatch) {
    // Submit email/password to the server

    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => {
        // if the request is good...

        // - Update state to indicate user is authenticated
        dispatch({type: AUTH_USER});

        dispatch({
          type    : FETCH_CURRENT_USER,
          payload : response.data.user
        });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);

        // - Redirect to the route '/feature'
        browserHistory.push('/feature');

      })
      .catch(() => {
        // If the request is bad
        // -Show an error to the user

        dispatch(authError('Bad Login Info'));
      });
  };
};

// These 2 are nearly identical and can be DRYed up

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, {email, password})
      .then(response => {
        // Same as signin
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      // Not the same
      .catch(error => {
        dispatch(authError(error.response.data.error));
      })
  }
}

export function signoutUser() {
  // remove JWT token
  localStorage.removeItem('token');
  // change auth
  return { type: DEAUTH_USER }
};


export function authError(error) {
  return {
    type    : AUTH_ERROR,
    payload : error
  };
};

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
};

export function fetchCurrentUser() {
  console.log('futch');
  return function(dispatch) {
    axios.get(`${API_URL}/currentUser`, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_CURRENT_USER,
          payload: response.data.user
        });
      })
      .catch(error => console.log(error));
  }
};