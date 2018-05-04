import React from 'react';
import { Card, CardItem, Input, Button } from './common';



class EmployeeCreate extends React.Component {

  render(){
    return (
      <Card>
        <CardItem>
          <Input label="Name" placeholder="Jane"/>
        </CardItem>
        <CardItem>
          <Input label="Phone" placeholder="555-555-5555"/>
        </CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem>
          <Button>
            Create
          </Button>
        </CardItem>
      </Card>
    )
  }
}

export default EmployeeCreate;
