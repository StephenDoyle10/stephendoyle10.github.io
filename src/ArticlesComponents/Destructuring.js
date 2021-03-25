import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
{/* <p></p> */}

class Destructuring extends React.Component {

  render() {
    const articleName = "Rest and Spread Operators, Destructuring";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p><Link as={Link} className="plainP" to="/articles">Blogpost</Link > &gt; {articleName}</p>
              <br/>
              <h3 className="subheading">{articleName}</h3>
              <br/>
              <p className="publishedDate">20 Jan 2021</p>
              <p>Working through MERN sstack tutorials, I noticed that ES6 concepts like destructuring, and rest and spread operators were being used liberally. At first this was confusing to me, as I hadn't had too much experience in these concepts. I decided to make this post and show examples of how they were most frequently used.</p>
              
              
            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default Destructuring;

