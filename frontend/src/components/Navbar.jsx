import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import { Link } from 'react-router-dom';

function NavigationBar() {  
  return (  
    <>  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top py-3" style = {{position: "static"}}>
      <Container fluid="lg">  
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <span className="brand-text">VAIBHAV ATTRE</span>
      </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link as={Link} to={"/About"}>About Me</Nav.Link>  
              <Nav.Link href="#pricing">Link 2</Nav.Link>  
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>  
              </NavDropdown>  
            </Nav>  
            <Nav>  
              <Nav.Link href="https://www.linkedin.com/in/vaibhav-attre-89005024a/">LinkedIn</Nav.Link>  
              <Nav.Link href="https://github.com/VaibhavAttre">GitHub</Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  );  
}  
export default NavigationBar;  