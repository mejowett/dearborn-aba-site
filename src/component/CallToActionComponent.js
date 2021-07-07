import React, { Component } from "react";

class CallToActionComponent extends Component {
  render() {
    return (
      <div>
        <section class="colored-section" id="cta">
          <div class="container-fluid">
            <h3 class="big-heading">
              Call us today. We are here to answer your questions.
            </h3>
            <img src="/images/phone-call.jpg"
            height="200"
            width="300"
            alt="Phone-call"

             />
          </div>
          
        </section>
      </div>
    );
  }
}

export default CallToActionComponent;
