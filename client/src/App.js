import React, { Component } from "react";
import CartNavbar from './components/CartNavbar'
import CartList from './components/CartList'

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <CartNavbar />
        <CartList />
      </div>
      </Provider>
    );
  }
}

export default App;
