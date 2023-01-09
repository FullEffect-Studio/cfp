import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NaviBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  data-scroll-section>
      <Container>
        <Navbar.Brand style={{cursor: "pointer"}}>Citizen Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Report A Problem</Nav.Link>
            <NavDropdown title="Sign In As" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="auth/admin/signin/">Sign in as an Admin</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign In as Public Officer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign up as Community Worker</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign up as Public Official</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Report a problem
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;