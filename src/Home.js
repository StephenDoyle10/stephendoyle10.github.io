import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'react-bootstrap';

//Local images:
import html from "./images/html-5.svg";
import css from "./images/css-3.svg";
import javascript from "./images/javascript-4.svg";
import bootstrap from "./images/bootstrap-4.svg";
import sass from "./images/sass.svg";
import npm from "./images/npm.svg";
import node from "./images/nodejs.svg";
import mongodb from "./images/mongodb.svg";
import git from "./images/git.svg";
import react from "./images/react3.svg";


class Home extends React.Component {
  

  render() {
    return (
      <Container>
          <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <div className="title">
            <h1>Stephen Doyle</h1>
            <h1>Developer</h1>
          </div>
          <div className="images">
          <img className="logos1" src={react} alt="React" />
          <img className="logos1" src={node} alt="Node.js" />
          <br/>
          <br/>
          
          <img className="logos2" src={mongodb} alt="MongoDB" />
            
            <br/>
            <img className="logos2" src={npm} alt="NPM" />
            <br/>
            <img className="logos2" src={git} alt="Git" />
            <br/>
            <img className="logos2" src={html} alt="HTML5" />
            <img className="logos2" src={css} alt="CSS3" />
            <img className="logos2" src={javascript} alt="JavaScript" />
            <br/>
            
            <img className="logos2" src={bootstrap} alt="Bootstrap" />
            <img className="logos2" src={sass} alt="Sass" />
            
            
            
          </div>
          
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
