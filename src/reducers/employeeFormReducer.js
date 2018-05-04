import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_UPDATE_SUCCESS
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
      return { ...state, ...INITIAL_STATE }

    default:
      return state;
  }
}
