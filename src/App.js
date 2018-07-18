import React, { Component } from 'react';
import RootRouter from './router'
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return <Provider store={store}><RootRouter></RootRouter></Provider>
  }
}
export default App;
