import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";


class Notes extends React.Component {
  

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
                <h2 className="subheading">Micro-articles</h2>
                <br/>
                
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Note 1</div></h5>
                <br/>
                <p className="articleTeaserText">Note 1 text</p>
                </div>
                
                
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Notes;