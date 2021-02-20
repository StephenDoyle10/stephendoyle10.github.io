import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
{/* <p></p> */}

class ArticleTemplate extends React.Component {

  render() {
    const articleName = "placeholder";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p><Link as={Link} className="plainP" to="/articles">Articles</Link > &gt; {articleName}</p>
              <br/>
              <h3 className="subheading">{articleName}</h3>
              <br/>
              <p className="publishedDate">20 Jan 2021</p>
              <p>Article text</p>
              
              
            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default ArticleTemplate;



{/* Future ideas:
-Agile
-CICD
-SaaS
-AWS
-Azure
-micro-services
-CORS
-ESLint
*/}