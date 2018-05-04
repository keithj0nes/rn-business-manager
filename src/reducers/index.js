import { combineReducers } from 'redux';
import auth from './authReducer';
import employeeForm from './employeeFormReducer';
import employees from './employeeReducer';

export default combineReducers({
  auth, employeeForm, employees
})
