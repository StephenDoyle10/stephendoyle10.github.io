import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent" id="contact">
              <h2 className="subheading">Contact</h2>
              <br />
              <p>I can be emailed at: stephen.doyle10@yahoo.co.uk</p>
              <br />
              <p>
                <a
                  className="articleLink"
                  href="https://github.com/StephenDoyle10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Github profile
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;