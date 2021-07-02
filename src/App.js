import React, { Component } from 'react';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './App.css';


class App extends Component {

  render() {
      return (
          <BrowserRouter>
            <div className="App">
                <Main />
            </div>
          </BrowserRouter>
      );
  };
}

export default App;