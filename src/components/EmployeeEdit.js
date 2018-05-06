import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardItem, Button, Confirm } from './common';

class EmployeeEdit extends React.Component {

  state = { showModal: false };


  componentWillMount(){
   _.each(this.props.employee, (value, prop) => {
     // console.log(value, prop, 'value and prop');
     this.props.employeeUpdate({prop, value})
   })
  }

  handleButtonSubmit = () => {
    const { name, phone, shift } = this.props;

    console.log(name, shift, phone, 'LOGGING');
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  handleTextSubmit = () => {
    const { phone, name, shift } = this.props;
    Communications.text(phone, `Hey ${name}, your upcoming shift is on ${shift}`);

  }

  onAccept = () => {
    console.log('deleting employee');
    this.props.employeeDelete({uid: this.props.employee.uid})
  }

  showHideModal = () => {
    this.setState({showModal: !this.state.showModal})
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

        <CardItem>
          <Button whenPressed={this.handleTextSubmit}>
            Text Employee
          </Button>
        </CardItem>

        <CardItem>
          <Button whenPressed={this.showHideModal} ds={true}>
            Fire Employee
          </Button>
        </CardItem>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.showHideModal}
        >
          Are you sure you want to fire {"\n"} {this.props.employee.name}?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
