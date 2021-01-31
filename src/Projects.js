import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Boarpp from './ProjectComponents/Boarpp';
import Calculator from './ProjectComponents/Calculator';
import SalaryCalc from './ProjectComponents/SalaryCalc';
import CheatSheet from './ProjectComponents/CheatSheet';
import PortfolioWebsite from './ProjectComponents/PortfolioWebsite';

class Projects extends React.Component {
  

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent" id="projects">
              <h2 className="subheading">Projects</h2>
              <br />
              <h3 className="subheading">Full-stack:</h3>
              <Boarpp/>
              <br />
              <h3 className="subheading">Front-end:</h3>
              <Calculator/>
              <CheatSheet/>
              <SalaryCalc/>
              <PortfolioWebsite/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;

