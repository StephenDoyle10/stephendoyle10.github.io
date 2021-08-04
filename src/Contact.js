import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent" id="contact">
              <h2 className="subheading">Contact</h2>
              <br />
              <p>He/him. I can be emailed at:</p>
              <p>stephen.doyle10@yahoo.co.uk</p>
              <br />
              
                <a
                  className="articleLink"
                  href="https://github.com/StephenDoyle10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img class="contactLogos" src={github}></img>
                </a>
                
                <a
                  className="articleLink"
                  href="https://www.linkedin.com/in/stephen-doyle-making-ripples/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <img class="contactLogos" src={linkedin}></img>
                </a>
                
              
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;