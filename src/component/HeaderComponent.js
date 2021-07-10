import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="colored-section" id="title">
          <div className="container-fluid">
          <Navbar dark expand="md">
            <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <i className="fa fa-home fa-lg" /> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/services">
                      <i className="fa fa-list fa-lg" /> Services
                    </NavLink>
                  </NavItem>
                   <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <i className="fa fa-address-card fa-lg" /> Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Jumbotron fluid>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Dearborn ABA</h4>
                  <h1>We work with Superheroes!</h1>
                </div>
                <div className="col-lg-6">
                <img className="title-image" src="/images/super-heroes.jpg" alt="super-heroes" />
                   </div>
              </div>
            </div>
          </Jumbotron>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
