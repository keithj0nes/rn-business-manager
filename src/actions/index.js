import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}



export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('user being logged in in action creators');
        loginUserSuccess(dispatch, user);
      })
      .catch(err => {
        console.log(err, 'creating new user')
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(err => loginUserFail(dispatch));
      })
  }
}

//helper function
const loginUserSuccess = (dispatch, user) => {
  dispatc({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}
