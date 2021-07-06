import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
  render() {
    return (
      <div className="container">  
      <Carousel>
        <div>
          <img className="d-block w-100" src="/images/family.jpg" />
          <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <img className="d-block w-100" src="/images/mask-women.jpg" />
          <p className="legend">Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.</p>
        </div>
        <div>
          <img className="d-block w-100" src="/images/boys.jpg" />
          <p className="legend">Tincidunt lobortis feugiat vivamus at augue eget arcu. Tempor commodo ullamcorper a lacus vestibulum sed.</p>
        </div>
      </Carousel>
      </div>
    );
  }
}

export default Home;
