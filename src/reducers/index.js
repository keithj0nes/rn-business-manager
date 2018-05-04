import { combineReducers } from 'redux';
import auth from './authReducer';
import employeeForm from './employeeFormReducer';
import employee from './employeeReducer';

export default combineReducers({
  auth, employeeForm, employee
})
