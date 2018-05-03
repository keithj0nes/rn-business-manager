import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';


// INITIAL_STATE helps identify what is expected to be part of the authReducer's state
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  spinner: false
}

export default (state = INITIAL_STATE, action) => {
  // console.log(state, 'state');
  console.log(action, 'action');
  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, spinner: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed', password: '', spinner: false};
    default:
      return state;
  }
}
