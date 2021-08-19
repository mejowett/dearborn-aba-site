import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class CallToActionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div>
        <section className="colored-section" id="cta">
          <h1 className="big-heading">
            We are here to answer your questions. <br />
            Call us Today.
          </h1>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              <h2>Contact Us</h2>
            </ModalHeader>
            <ModalBody>
              <a
                role="button"
                className="btn btn-link"
                href="tel:+11-321-555-1234"
              >
                <i className="fa fa-phone" /> 1-321-555-1234
              </a>
              <a
                role="button"
                className="btn btn-link"
                href="Dearbornaa@dearborn.co"
              >
                <i className="fa fa-envelope-o" /> Dearbornaa@dearborn.co
              </a>
            </ModalBody>
          </Modal>
          <Button className="primary-lg" onClick={this.toggleModal}>
            Contact Us
          </Button>
        </section>
      </div>
    );
  }
}

export default CallToActionComponent;
