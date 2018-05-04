import React from 'react';
import { Text } from 'react-native';
import { CardItem } from './common';

class ListItem extends React.Component {
  render(){
    const { name } = this.props.employee;

    return (
      <CardItem>
        <Text style={styles.titleStyle}>
          { name }
        </Text>
      </CardItem>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
