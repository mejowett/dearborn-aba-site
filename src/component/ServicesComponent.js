import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MODELS } from "../shared/models";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: MODELS,
    };
  }
  render() {
    const services = this.state.models.map((model) => {
      return (
        <div key={model.id} className="col">
          <Card>
            <CardImg
              className="card-image"
              src={model.image}
              alt={model.name}
            />

            <CardBody className="card-content">
              <h2>{model.name}</h2>
              <p>{model.description}</p>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div>
          <h2 className="section-heading">Our Services</h2>
        </div>

        <div className="row">{services}</div>
      </div>
    );
  }
}

export default Services;
