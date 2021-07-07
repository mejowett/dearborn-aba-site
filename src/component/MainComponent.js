import React, { Component } from "react";
import Header from "./HeaderComponent";
import CallToAction from "./CallToActionComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Services from "./ServicesComponent";
import Contact from "./ContactComponent";
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

      const HomePage = () => {
          return (
              <Home />
          );
      };
    

      return (
          <div>
              <Header/> 
              <Switch>
                    <Route path='/home' component={HomePage} />   
                    <Route exact path='/services'  />
                    <Redirect to='/home' />
              </Switch>
              <CallToAction />
              <Footer />
          </div>
      );
    }
}
  

    export default Main;
