import React from 'react';
import { Component } from 'react';
import { Nav,Container,Navbar } from 'react-bootstrap';

class Navigation extends Component {
    render(){
    return ( 
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">NetFlix</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Tv Shows</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Movies</Nav.Link>
      <Nav.Link href="#deets">Recently Added</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     );
    }
}
 
export default Navigation;
