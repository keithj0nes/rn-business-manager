import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({children, onAccept, onDecline, visible}) => {

  const { textStyle, cardItemStyle, containerStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}

    >
      <View style={containerStyle}>
        <CardItem style={cardItemStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardItem>
        <CardItem>
          <Button whenPressed={onAccept}>Yes</Button>
          <Button whenPressed={onDecline}>No</Button>
        </CardItem>
      </View>
    </Modal>
  )
}

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },

  cardItemStyle: {
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
