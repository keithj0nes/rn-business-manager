import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'; //middleware;
import firebase from 'firebase';
import './config';
import Router from './Router';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
