import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB_4kM2UaX9xzXjqu8DDi1G4Z90P4qT_2w',
      authDomain: 'manager-80ccf.firebaseapp.com',
      databaseURL: 'https://manager-80ccf.firebaseio.com',
      projectId: 'manager-80ccf',
      storageBucket: 'manager-80ccf.appspot.com',
      messagingSenderId: '785406915931'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
