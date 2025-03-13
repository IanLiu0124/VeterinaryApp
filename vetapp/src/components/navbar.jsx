import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar variant="tabs" bg="light" data-bs-theme="light">
        <Container>
        <Nav className="mx-auto">
          <Navbar.Brand as={Link} to="/">Overview</Navbar.Brand>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;