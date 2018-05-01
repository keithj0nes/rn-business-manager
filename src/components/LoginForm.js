import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render(){
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="hello@test.com"
            onChangeText={this.onEmailChange}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            label="Password"
            placeholder="******"
          />
        </CardItem>

        <CardItem>
          <Button> Click Meee </Button>
        </CardItem>
      </Card>
    )
  }
}

export default connect(null, {emailChanged})(LoginForm);
