import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onandleLogin = () => {
    console.log('clikmemeee');
    const { email, password } = this.props;

    this.props.loginUser({ email, password});
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
          <Button whenPressed={this.onandleLogin}>
            Click Meee
          </Button>
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

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
