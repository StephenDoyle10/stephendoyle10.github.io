import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {Link } from 'react-router-dom';


class Blog extends React.Component {
  


  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
                <h2 className="subheading">Blog</h2>
                <br/>


                <Link as={Link} to="/graphql">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Introducing GraphQL</div> - <span className="publishedDate">22 March 2021</span></h5>
                <br/>
                <p className="articleTeaserText">GraphQL is an alternative to RESTful APIs that has been growing in popularity in recent years. So why has GraphQL been getting so popular? This largely has to do with the gains in efficiency that GraphQL grants your project. The problem with REST API calls is that they often result in overfetching and underfetching...[read more]</p>
                </div>
                </Link>


                <Link as={Link} to="/mernsetup2">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Setting up a basic MERN stack project: Part 2</div> - <span className="publishedDate">11 March 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Welcome to Part 2 in our step-by-step guide to setting up a basic bare-bones MERN stack project with full CRUD capabilities. If you had follwed along with part 1, your code should look like this currently. Now lets add React to our project (and if at any point you get stuck you can view how the code is supposed to look by the end of this post here)..[read more]</p>
                </div>
                </Link>


                <Link as={Link} to="/mernsetup1">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Setting up a basic MERN stack project: Part 1</div> - <span className="publishedDate">10 March 2021</span></h5>
                <br/>
                <p className="articleTeaserText">The MERN stack is one of the best stacks in which to build large scale web projects. However, the initial set-up, even to build a simple bare-bones project, can be intimidatingly complex for people who are new to programming. This is part 1 of a series of blogposts that guides you to creating a simple bare-bones MERN stack project with full CRUD capabilities. These posts are not for someone completely new to the MERN stack, but rather they are better suited to someone who is familiar with the technologies and wants a succinct reminder on how to set up a project...[read more]</p>
                </div>
                </Link>



                <Link as={Link} to="/ComponentTypes">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">React Component Types</div> - <span className="publishedDate">10 Feb 2021</span></h5>
                <br/>
                <p className="articleTeaserText">The topic of React components touches on a lot of different concepts, such as stateful and stateless components, function components, and class components. Meanwhile, the arrival of Hooks in 2018 changed everything. What do all these things mean, and how do they fit into each other. It can be a bit tricky to understand all these concepts and grasp how they all fit into one another. This article aims to help with that!...[read more]</p>
                </div>
                </Link>
                <Link as={Link} to="/enginesandruntime">
                    <div className="articleTeaser" >
                <h5 >
                <div className="plainP">Engines and Runtime Environments</div> - <span className="publishedDate">05 Feb 2021</span></h5>
                <br/>
                <p className="articleTeaserText">Node.JS is a runtime environment. Most people accept that without really realising what a runtime environment actually is. This article looks at what runtime environments and engines are, why they are necessary for JavaScript, and why Node is a gamechanger in this regard...[read more]</p>
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

export default Blog;
