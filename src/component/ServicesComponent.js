import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";

class Services extends Component {
  render() {
    return (
        <React.Fragment>
        <h2 class="section-heading">Our Team</h2>
        <p>They supportive, engaging and believe the uniqueness of all individuals.</p>
    
      <div className="row">
        <div className="team-column col-lg-4 col-md-6">
          <Card>
            <CardImg src="/images/smiling-staff.jpg" className="card-img-top"  alt="smiling-staff" />

            <CardBody>
              <h3>Behavior Technician</h3>

              <p>Expert Training</p>
              <p>Respectful</p>
              <p>Dedicated</p>
              <p>Caring</p>
            </CardBody>
          </Card>
        </div>
     
      <div className="team-column col-lg-4 col-md-6">
        <Card>
          <CardImg src="/images/bcbas.jpg" alt="BCBA's" />

          <CardBody>
          <h3>BCBA</h3>
          <p>Fully Board Certified</p>
          <p>On call</p>
          <p>Organized</p>
          <p>Ethical</p>
          </CardBody>
        </Card>
      </div>
  
    <div className="team-column col-lg-4 col-md-6">
      <Card>
        <CardImg src="/images/csm.jpg" alt="CSM" />

        <CardBody>
        <h3>CSM</h3>
          <p>Problem Solvers</p>
          <p>On call</p>
          <p>Ready to listen</p>
          <p>Organized</p>
        </CardBody>
      </Card>
    </div>
  </div>
  </React.Fragment>
    );
  }
}

export default Services;
