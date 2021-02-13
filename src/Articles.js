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
                <Link as={Link} to="/ComponentTypes">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">React Component Types</div> - <span className="publishedDate">10 Feb 2021</span></h5>
                <br/>
                <p className="articleTeaserText">The topic of React components touches on a lot of different concepts, such as stateful and stateless components, function components, and class components. Meanwhile, the arrival of Hooks in 2018 changed everything. What do all these things mean, and how do they fit into each other. It can be a bit tricky to understand all these concepts and grasp how they all fit into one another. This article aims to help with that!...[read more]</p>
                </div>
                </Link>
                <Link as={Link} to="/componenttypes">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Engines and Runtime Environments</div> - <span className="publishedDate">05 Feb 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Node.JS is a runtime environment. Most people accept that without really realising what a runtime environment actually is. This article looks at what a runtime environments and engines are, why they are necessary for JavaScript, and why Node is a gamechanger in this regard...[read more]</p>
                </div>
                </Link>
                <Link as={Link} to="/deployingreact">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Deploying React on GitHub Pages</div> - <span className="publishedDate">27 Jan 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Luckily there is a fairly straightforward way to deploy a front-end React project online for free, for the world to see! This is done using GitHub, and more specifically, their GitHub pages feature. There are a number of steps involved in this, which this article goes through....[read more]</p>
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
