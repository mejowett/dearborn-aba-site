import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="5000"
          showThumbs={false}
        >
          <div>
            <img
              className="d-block w-100"
              src="/images/family.jpg"
              alt="family"
            />
            <p className="legend">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img
              className="d-block w-100"
              src="/images/mask-women.jpg"
              alt="women"
            />
            <p className="legend">
              Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
              tortor aliquam.
            </p>
          </div>
          <div>
            <img className="d-block w-100" src="/images/boys.jpg" alt="boys" />
            <p className="legend">
              Tincidunt lobortis feugiat vivamus at augue eget arcu. Tempor
              commodo ullamcorper a lacus vestibulum sed.
            </p>
          </div>
        </Carousel>

        <div className="container-fluid">
          <div className="row">
            <div className="feature-box col-lg-4">
              <img
                src="/images/experts.png"
                height="100"
                width="150"
                alt="data"
              />

              <h3 className="feature-title">Top Professionals</h3>
              <p>We employee more BCBA's.</p>
            </div>

            <div className="feature-box col-lg-4">
              <img
                src="/images/high-five.png"
                height="100"
                width="150"
                alt="data"
              />

              <h3 className="feature-title">Respected Clients</h3>
              <p>We embrace and celebate our clients unique personalities.</p>
            </div>

            <div className="feature-box col-lg-4">
              <img src="/images/data.png" height="100" width="150" alt="data" />

              <h3 className="feature-title">Data Driven.</h3>
              <p>We target the behaviors that will improve lives.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
