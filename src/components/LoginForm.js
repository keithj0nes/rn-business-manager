import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardItem, Input, Button, Spinner } from './common';

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

  renderError() {
    if(this.props.error){
      return (
        <View style={{backgroundColor: '#fff'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderTextOrSpinner(){
    if(this.props.spinner){
      return <Spinner />
    }
    return (
      <Button whenPressed={this.onandleLogin}>
        Log In
      </Button>
    )
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

        {this.renderError()}

        <CardItem>
          {this.renderTextOrSpinner()}
        </CardItem>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    spinner: state.auth.spinner
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
