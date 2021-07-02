import React, { Component } from "react";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Services from "./ServicesComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { SERVICE } from '../shared/service';
import { TEAM } from '../shared/team';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
          service: SERVICE,
          team: TEAM
      };
      
  }
  render() {
      return (
          <div>
              <Header/> 
              <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/contactus' component={Contact} />
              </Switch>
          </div>
      );
  }
}
  

    export default Main;
