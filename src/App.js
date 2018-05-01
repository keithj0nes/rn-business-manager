import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import './config';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header title={'Login'}/>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

export default App;
