import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Boarpp from "./ProjectComponents/Boarpp";
import Calculator from "./ProjectComponents/Calculator";
import SalaryCalc from "./ProjectComponents/SalaryCalc";
import CheatSheet from "./ProjectComponents/CheatSheet";
import PortfolioWebsite from "./ProjectComponents/PortfolioWebsite";
import MernBasic from "./ProjectComponents/MERN_basic";
import Lyrics from "./ProjectComponents/Lyrics";

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent" id="projects">
              <h2 className="subheading">Projects</h2>
              <br />
              <p>Here is a list of all the web apps I have built so far, starting with the most recent (and thus the most advanced), and finishing with my early forays into basic front-end html/css/js implementations. All of them can be visited online.</p>
              <h3 className="subheading">Full-stack:</h3>
              <Lyrics/>
              <MernBasic />
              <Boarpp />
              <br />
              <h3 className="subheading">Front-end:</h3>
              <PortfolioWebsite />
              <CheatSheet />
              <SalaryCalc />
              <Calculator />
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;