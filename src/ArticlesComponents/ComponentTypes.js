import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Gist from "react-gist";


class ComponentTypes extends React.Component {
  

  render() {
    const articleName = "React Component Types";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
        <p><Link as={Link} className="plainP" to="/blog">Blogpost</Link > &gt; {articleName}</p>
        <br/>
        <h3 className="subheading">{articleName}</h3>
        <br/>
        <p className="publishedDate">10 Feb 2021</p>
        <p>The topic of React components touches on a lot of different concepts, such as stateful and stateless components, function components, and class components. Meanwhile, the arrival of Hooks in 2018 changed everything. What do all these things mean, and how do they fit into each other? It can be a bit tricky to understand all these concepts and grasp how they all fit into one another. This article aims to help with that!</p>
        <h4>Function Components</h4>
        <p>Function components used to be called functional stateless components, or more simply stateless components, because - big surprise - it used to be impossible for them to contain state. However, since React 16.8 in 2018 and the introduction of Hooks, function components have now received an upgrade, and can now contain state. Before the introduction of Hooks, however, function components were used for components that did not require state. For example, function components can be used for parts of a website that would never have to change based on user input. For example, it is common for visual artists to create simple portfolio websites that are entirely static. This could happily be composed of all function stateless components. Another almost notorious example is the simple <a href="https://www.berkshirehathaway.com" className="articleLink" target="_blank"  rel="noopener noreferrer">website</a> for the multi-billion dollar company Berkshire Hathaway, that hasn't had an upgrade in almost 20 years. Again, there is no need for anything other than stateless function components for this website.</p>
        <p>A simple function component would look like this:</p>
        
        <Gist id="65c3c85d9157bb05487b4bd500806ab3" />
        <h4>Class Components</h4>
        <p>The syntax for a class component is a bit more complex.</p>
        <p>The advantage of class components used to be that they could take state. This means a class component can be modified and updated based on user input. A simple example of this is the humble 'to do list' app, that most beginner programmers have tackled at some point or other! When a user inputs a new list item, and then click submit, no doubt that item will be added to another component. This is done by updating the state of that component.</p>
        <p>That was the benefit of class components compared to function components. The downside was that the syntax for class components is a bit more complex than for function components. The above function component would look like this if written as a class component:</p>
        
        <Gist id="7634735736c5a93b50a796c14e4854b1" />
        <h4>Hooks</h4>
        <p>It is not really very difficult to learn how to create function components and class components, or to learn when one or the other should be used. However, the process is even simpler now, as since the introuction of Hooks in 2018 with React 16.8, there is no longer any need for class components, as function components can now take state. And indeed many developers believe that class components are now obsolete, and have no purpose any more. However, because class components are so prominent in existing and legacy code, it could be a while before they are phased out.</p>

        <p>Further reading:</p>
        <p>Making Sense of React Hooks: React employee Dan Abramov explains the reasons why Hooks was necessary:</p>
        <p><a href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889">https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889</a></p>
        <br />
        
        
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default ComponentTypes;