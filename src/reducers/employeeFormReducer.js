import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type){
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value }
    case EMPLOYEE_UPDATE_SUCCESS:
    console.log(state, 'STATE EMPLOYEE FORM REDUCER');
    console.log(action, "ACTION EMPLOYEE FORM REDUCER");
      return { ...state, ...INITIAL_STATE }
    case EMPLOYEE_SAVE_SUCCESS:
      return  INITIAL_STATE
    default:
      return state;
  }
}
