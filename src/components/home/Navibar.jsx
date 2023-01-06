import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NaviBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  data-scroll-section>
      <Container>
        <Navbar.Brand href="#home">Citizen Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Sign In</Nav.Link>
            <Nav.Link href="#pricing">Report A Problem</Nav.Link>
            <NavDropdown title="Sign In" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign in As Community Worker</NavDropdown.Item>
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