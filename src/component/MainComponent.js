import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Services from "./ServicesComponent";
import CallToAction from "./CallToActionComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [
        {
          id: 0,
          name: "One on One Behavior Support",
          description:
            "Our behavior technicians will work directly with the family.They will implement, monitor and collect data on treatment goals.",
          image: "/images/reading.jpg",
        },

        {
          id: 1,
          name: "Behavior Support: Center Based  ",

          description:
            "Our behavior technicians will work with our clients in a state of the art ABA center.",
          image: "/images/center.jpg",
        },
        {
          id: 2,
          name: " Feeding Therapy ",
          description:
            "Feeding therapy can expand your child's diet and improve mealtimes. Lorem ipsum dolor sit amet.",
          image: "/images/feeding-therapy.jpg",
        },
        {
          id: 3,
          name: "Social Skills: Age Appropriate",
          description:
            "Real world experience and practice that can improve your child's relationships.",
          image: "/images/friendship.jpg",
        },
      ],
    };
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
