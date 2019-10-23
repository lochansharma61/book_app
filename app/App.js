import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './stack';


class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}


// const Root = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

export default Root;
