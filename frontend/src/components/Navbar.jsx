import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import { Link } from 'react-router-dom';

function NavigationBar() {  
  //Using navbar from react bootstrap to help with navigation
  //Links to other pages and also linkedin + github 
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
              <Nav.Link as = {Link} to={"/project1"}>TurboThrill</Nav.Link>  
              <Nav.Link as = {Link} to={"/flatfilemanager"}>Flat File Manager</Nav.Link>  
              <Nav.Link as = {Link} to={"/projects"}>Projects</Nav.Link> 
              <Nav.Link as = {Link} to={"/image-generator"}>Random-Image-Generator</Nav.Link>  
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