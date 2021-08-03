import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Services extends Component {
  constructor(props) {
    super(props);
    // this.state = props.models;
    //   models: [
    //     {
    //       id: 0,
    //       name: "One on One Behavior Support",
    //       description:
    //         "Our behavior technicians will work directly with the family.They will implement, monitor and collect data on treatment goals.",
    //       image: "/images/reading.jpg",
    //     },

    //     {
    //       id: 1,
    //       name: " One on One Behavior Support: Center Based  ",

    //       description:
    //         "Our behavior technicians will work with our clients in a state of the art ABA center.",
    //       image: "/images/center.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: " Feeding Therapy ",
    //       description:
    //         "Feeding therapy can expand your child's diet and improve mealtimes. Lorem ipsum dolor sit amet.",
    //       image: "/images/feeding-therapy.jpg",
    //     },
    //     {
    //       id: 3,
    //       name: "Social Skills: Age Appropriate",
    //       description:
    //         "Real world experience and practice that can improve your child's relationships.",
    //       image: "/images/friendship.jpg",
    //     },
    //   ],
    // };
  }
  render() {
    const services = this.props.models.map((model) => {
      return (
        <React.Fragment>
          <h2 class="section-heading">Our Services</h2>
          <div key={model.id} className="col">
            <img
              src={model.image}
              alt={model.name}
              style={{ width: "500px", height: "300px" }}
            />
            <h2>{model.name}</h2>
            <p>{model.description}</p>
          </div>
        </React.Fragment>
      );
    });
    return (
      <div className="container">
        <div className="row">{services}</div>
      </div>
      // <React.Fragment>
      //   <h2 class="section-heading">Our Services</h2>
      //   {/* <div className="row">
      //     <div className="team-column col-lg-6 col-md-6">
      //       <Card>
      //         <CardImg
      //           src="/images/reading.jpg"
      //           className="card-img-top"
      //           alt="reading"
      //         />

      //         <CardBody>
      //           <h3>One on One Behavior Support</h3>

      //           <p>Expert Training</p>
      //           <p>Respectful</p>
      //           <p>Dedicated</p>
      //           <p>Caring</p>
      //         </CardBody>
      //       </Card>
      //     </div>

      //     <div className="team-column col-lg-6 col-md-6">
      //       <Card>
      //         <CardImg src="/images/center.jpg" alt="teacher and student" />

      //         <CardBody>
      //           <h3>One on One Behavior Support: Center Based</h3>
      //           <p>Fully Board Certified</p>
      //           <p>On call</p>
      //           <p>Organized</p>
      //           <p>Ethical</p>
      //         </CardBody>
      //       </Card>
      //     </div>

      //     <div className="team-column col-lg-6 col-md-6">
      //       <Card>
      //         <CardImg src="/images/feeding-therapy.jpg" alt="mealtime" />

      //         <CardBody>
      //           <h3>Feeding Therapy</h3>
      //           <p>Problem Solvers</p>
      //           <p>On call</p>
      //           <p>Ready to listen</p>
      //           <p>Organized</p>
      //         </CardBody>
      //       </Card>
      //     </div>
      //     <div className="team-column col-lg-6 col-md-6">
      //       <Card>
      //         <CardImg src="/images/friendship.jpg" alt="friends" />

      //         <CardBody>
      //           <h3>Social Skills: Age Appropriate</h3>
      //           <p>Problem Solvers</p>
      //           <p>On call</p>
      //           <p>Ready to listen</p>
      //           <p>Organized</p>
      //         </CardBody>
      //       </Card>
      //     </div>
      //   </div> */}
      //   <h2 class="section-heading">Meet the Team</h2>
      //   <p>
      //     They are supportive, engaging and believe in the uniqueness of all
      //     individuals.
      //   </p>
      //   <div className="row">
      //     <div className="team-column col-lg-4 col-md-6">
      //       <Card>
      //         <CardImg
      //           src="/images/smiling-staff.jpg"
      //           className="card-img-top"
      //           alt="smiling-staff"
      //         />

      //         <CardBody>
      //           <h3>Behavior Technician</h3>

      //           <p>Expert Training</p>
      //           <p>Respectful</p>
      //           <p>Dedicated</p>
      //           <p>Caring</p>
      //         </CardBody>
      //       </Card>
      //     </div>

      //     <div className="team-column col-lg-4 col-md-6">
      //       <Card>
      //         <CardImg src="/images/bcbas.jpg" alt="BCBA's" />

      //         <CardBody>
      //           <h3>BCBA</h3>
      //           <p>Fully Board Certified</p>
      //           <p>On call</p>
      //           <p>Organized</p>
      //           <p>Ethical</p>
      //         </CardBody>
      //       </Card>
      //     </div>

      //     <div className="team-column col-lg-4 col-md-6">
      //       <Card>
      //         <CardImg src="/images/csm.jpg" alt="CSM" />
      //         <CardBody>
      //           <h3>CSM</h3>
      //           <p>Problem Solvers</p>
      //           <p>On call</p>
      //           <p>Ready to listen</p>
      //           <p>Organized</p>
      //         </CardBody>
      //       </Card>
      //     </div>
      //   </div>
      // </React.Fragment>
    );
  }
}

export default Services;
