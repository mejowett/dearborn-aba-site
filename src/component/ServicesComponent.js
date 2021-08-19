import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MODELS } from "../shared/models";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: MODELS,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
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
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                  <h2>Faucibus Pulvinar Elementum</h2>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae sapien pellentesque habitant morbi tristique.
                    Faucibus ornare suspendisse sed nisi lacus sed viverra.
                    Faucibus pulvinar elementum integer enim neque volutpat ac
                    tincidunt.
                  </p>
                </ModalBody>
              </Modal>
              <Button className="primary-lg" onClick={this.toggleModal}>
                Read More
              </Button>
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
