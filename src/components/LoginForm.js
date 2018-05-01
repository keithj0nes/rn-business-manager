import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  render(){
    return (
      <Card>
        <CardItem>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="hello@test.com"
            onChangeText={this.onEmailChange}
          />
        </CardItem>

        <CardItem>
          <Input
            value={this.props.password}
            secureTextEntry
            label="Password"
            placeholder="******"
            onChangeText={this.onPasswordChange}
          />
        </CardItem>

        <CardItem>
          <Button> Click Meee </Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
