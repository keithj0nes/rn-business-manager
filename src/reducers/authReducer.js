import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
  console.log(state, 'state');
  switch (action.type){
    case EMAIL_CHANGED:
      return state;
    default:
      return state;
  }
}
