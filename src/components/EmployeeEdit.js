import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardItem, Button } from './common';

class EmployeeEdit extends React.Component {

  componentWillMount(){
   _.each(this.props.employee, (value, prop) => {
     // console.log(value, prop, 'value and prop');
     this.props.employeeUpdate({prop, value})
   })
  }

  handleButtonSubmit = () => {
    const { name, phone, shift } = this.props;

    console.log(name, shift, phone, 'LOGGING');
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }
  render(){
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button whenPressed={this.handleButtonSubmit}>
            Save Changes
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
