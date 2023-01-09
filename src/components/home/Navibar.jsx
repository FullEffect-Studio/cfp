import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavibarStyle = styled.nav`
  .navdropper-link a {
    text-decoration: none;
    color: black;
  }
`;

function NaviBar() {
  return (
    <NavibarStyle>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        data-scroll-section
      >
        <Container>
          <Navbar.Brand style={{ cursor: "pointer" }}>
            Citizen Platform
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Report A Problem</Nav.Link>
              <NavDropdown title="Sign In As" id="collasible-nav-dropdown">
                <NavDropdown.Item className="navdropper-link">
                  <Link to="auth/admin/signin/">Sign in as an Admin</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropper-link">
                  <Link to="auth/community-worker/signin/">
                    Sign up as Community Worker
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropper-link">
                  <Link to="auth/public-officer/signin/">
                    Sign up as Public Official
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Report a problem
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavibarStyle>
  );
}

export default NaviBar;
