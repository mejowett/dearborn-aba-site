import React, { Component } from "react";
import Main from "./component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "./App.css";
import { MODELS } from "./shared/models";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: MODELS,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
