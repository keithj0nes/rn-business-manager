import { combineReducers } from 'redux';
import auth from './authReducer';
import employee from './employeeFormReducer';

export default combineReducers({
  auth, employee
})
