import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

{/*<p></p>*/}
class MongoIntro extends React.Component {
  

  render() {
    const articleName = "Introduction to MongoDB";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
        <p><Link as={Link} className="plainP" to="/articles">Blogpost</Link > &gt; {articleName} </p>
        <br/>
        <h3 className="subheading">{articleName}</h3>
        <br/>
        <p className="publishedDate">20 Feb 2021</p>
        <p>When you first start exploring MongoDB you are hit with a host of different concepts: documents, collections, clusters,Node.js driver, mongod, Mongo Atlas, Mongo Compass, Object Document Mappers, Mongoose, mongo shell, . It can be overwhelming, but this article aims to explain all these concepts in simple terms and show how they all fit together.</p>
        <br/>
        <p>Mongo Shell - the Mongo shell is an interactive JavaScript shell. In the interactive shell, a few non-JavaScript conveniences are available over and above the full power of JavaScript.</p>
        <p>According to official docs: 'The mongo shell is an interactive JavaScript interface to MongoDB. You can use the mongo shell to query and update data as well as perform administrative operations.'</p>
        <p></p>
        <p>The MonogoDB Node Driver and Mongoose</p>
        <p>The MongoDB Node Driver and Mongoose and two alterntoves for doing the same thing. They both allow you to connect and interact with the MongoDB server, providing methods that are very similar to those found in the Mongo Shell. The Mongo driver is low level, while Mongoose has a higher level of abstraction and more convenient methods, or, in other words, Mongoose is more beginner-friendly.</p>
        <p></p>

        
        
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default MongoIntro;