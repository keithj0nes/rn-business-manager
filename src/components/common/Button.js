import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({whenPressed, children, ds = null}) => {
  const { buttonStyle, textStyle, dangerStyle, dangerTextStyle } = styles
  return (
    <TouchableOpacity onPress={whenPressed} style={[buttonStyle, ds ? dangerStyle : null]}>
      <Text style={[textStyle, ds ? dangerTextStyle : null]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  dangerStyle: {
    backgroundColor: '#F44336',
    borderWidth: 0
  },
  dangerTextStyle: {
    color: '#fff'
  }
}

export { Button };
