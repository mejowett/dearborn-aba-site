import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Services from "./ServicesComponent";
import Faq from  "./FaqComponent";
import CallToAction from "./CallToActionComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/services"
            render={() => <Services models={this.state.models} />}
          />
          <Route path="/faq" component={Faq} />
          <Redirect to="home" />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default Main;
