import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <h1 className="text-light m-0">MP</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

            {/* Login Button */}
            <Button
              as={NavLink}
              to="/login"
              className="custom-btn"
              variant="outline-light"
            >
              Login
            </Button>

            {/* Dashboard Button */}
            <Button
              as={NavLink}
              to="/dashboard"
              className="custom-btn"
              variant="warning"
            >
              Dashboard
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
