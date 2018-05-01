import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {
  render(){
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            plasceholder="hello@test.com"
          />

        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            label="Password"
            plasceholder="******"
          />
        </CardItem>
        <CardItem>
          <Button> Click Meee </Button>
        </CardItem>
      </Card>
    )
  }
}

export default LoginForm;
