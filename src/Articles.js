import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {Link } from 'react-router-dom';


class Articles extends React.Component {
  

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
                <h2 className="subheading">Articles</h2>
                <br/>
                <Link as={Link} to="/deployingreact">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Deploying React</div> - <span className="publishedDate">27 Jan 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Luckily, by using GitHub there is a way to deploy your react project online for free for the world to see. However, it can be tricky process, this article outlines the steps that worked for me to deploy me project online...[read more]</p>
                </div>
                </Link>
                
                <Link as={Link} to="/asyncjsarticle">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Asynchronus Javascript</div> - <span className="publishedDate">20 Jan 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Aysynchronous JavaScript touches on a lot of different concepts, such as callback functions, higher order functions, ‘callback hell’, single- vs multi-threaded code, I/O blocking/non-blocking, the Javascript runtime, the event loop, the call stack, task queue, promises, async/await, web apis, and node apis. It can seem overwhelming, however the aim of the following article is to explain all these concepts and show how they all fit together...[read more]</p>
                </div>
                </Link>
                
                
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
