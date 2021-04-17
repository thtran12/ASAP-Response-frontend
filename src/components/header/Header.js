import "./Header.css";
import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          expand="sm"
          variant="light"
          bg="white"
        >
          <Navbar.Toggle
            id="toggle"
            aria-controls="navbar-sides"
          ></Navbar.Toggle>
          
          <Navbar.Collapse className="navbar-sides order-1 order-md-0 w-100">
            <Nav activekey={window.location.pathname}>
              <LinkContainer to="/about" className="navlinks">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="contact" className="navlinks">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

          <Nav
            activekey={window.location.pathname}
            className="mx-auto order-0 order-md-1"
          >
            <LinkContainer to="/">
              <Navbar.Brand className="mx-auto">FirstResponders</Navbar.Brand>
            </LinkContainer>
          </Nav>
          
          <Navbar.Collapse className="navbar-sides ml-auto order-2 w-100">
            <Nav activekey={window.location.pathname} className="ml-auto">
              <LinkContainer to="/map" className="navlinks">
                <Nav.Link>Map</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" className="navlinks">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
