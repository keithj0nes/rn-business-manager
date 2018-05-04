import React from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Input, Button } from './common';


class EmployeeCreate extends React.Component {

  handleButtonSubmit = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render(){
    return (
      <Card>
        <CardItem>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}

          />
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
          <Text style={styles.pickertTextStyle}> Shift </Text>
          <Picker style={{flex: 1}}
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>

        </CardItem>
        <CardItem>
          <Button whenPressed={this.handleButtonSubmit}>
            Create
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const styles = {
  pickertTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
}
export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);