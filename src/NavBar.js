import React, {useState} from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar () {
  


  //the following variable, and some other additions to code below, is necessaryto fix a bug, in which on the dropdown nav menu, it will not close once an item has been selected. see https://stackoverflow.com/a/58530447 for more info. 
  const [expanded, setExpanded] = useState(false);

  
  

  
    return (
      <Navbar expanded={expanded} fixed="top" className="portfolioNavbar" expand="md">
        <Navbar.Brand onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/">
          Stephen Doyle
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            
            <Nav.Link onClick={() => setExpanded(false)} className="navbarText" as={Link} to="/about">About
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/blog">
              Blog
            </Nav.Link>
            {/*<Nav.Link onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/humour">
              Humour
    </Nav.Link>*/}
            <Nav.Link onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} className="navbarText" to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  
}

export default NavBar;

