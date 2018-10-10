import React, { Component } from "react";
import CartNavbar from './components/CartNavbar'

import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartNavbar />
      </div>
    );
  }
}

export default App;
