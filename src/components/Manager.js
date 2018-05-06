import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';
import { Card, CardItem, Button } from './common';

class Manager extends React.Component {

  handleSignOut = () => {
    console.log('clicking signout');
    this.props.signOut();
  }

  render(){
    return (
      <Card>
        <CardItem>
          <Button whenPressed={this.handleSignOut}>Sign Out</Button>
        </CardItem>
      </Card>

    )
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(null, { signOut })(Manager);
