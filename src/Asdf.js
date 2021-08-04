import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ogimage from "./images/ogimage.png";


class Asdf extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <img src={ogimage} alt="asdf"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Asdf;