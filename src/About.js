import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'react-bootstrap';



class About extends React.Component {
  
  render() {
    return (
      <Container>
          <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <div className="bodyContent" id="about">
        <h2 className="subheading">About</h2>
        <br />
        <br />
        <p className="quote">'Problems are opportunities in disguise'</p>
        <br />
        <p>I think we can all agree 2020 was a terrible year! With quarantines, lockdowns, self-isolations, and all that kind of fun stuff, most of us had a lot of free time on our hands. I decided to make lemonade with 2020's lemons, and use the extra free time to finally really get into the weeds of a hobby that had always captivated me: programming.
          <br /><br />
          Although my previous work experience has been in recruitment, and in teaching English as a foreign language, I knew there were a lot of successful self-taught programmers out there. Like a lot of people, I was already familiar with <span className="bold">HTML</span> and <span className="bold">CSS</span>, but in 2020 I started to teach myself JavaScript for the first time, and quickly came to appreciate the flexibility and power of the language.
          <br /><br />
          Once I had spent time learning <span className="bold">JavaScript</span> theory, such as <span className="bold">regular expressions</span>, <span className="bold">methods</span>, <span className="bold">algorithms</span>, <span className="bold">data-structures</span>, and <span className="bold">ES6</span>, I started to put this theory into practice by adding JavaScript to HTML/CSS front-end projects as a way to produce single-page web applications that were responsive to user inputs. Of course, as is the tried and tested and clichéd path, I built a <a href="https://stephendoyle10.github.io/queerculator.github.io/" className="articleLink" target="_blank"  rel="noopener noreferrer">calculator</a> first! Next came an interactive javaScript string method <a href="https://stephendoyle10.github.io/jsstringmethods/" className="articleLink" target="_blank"  rel="noopener noreferrer">cheat sheet</a>, and then a <a href="https://stephendoyle10.github.io/uksalarycalculator/" className="articleLink" target="_blank"  rel="noopener noreferrer">UK Salary Calculator</a>.
          <br /><br />
          The next challenge was to turn my hand to <span className="bold">full-stack development</span>, and, in particular, to use technologies such as <span className="bold">Node.JS</span>, <span className="bold">Express</span> and <span className="bold">MongoDB</span>. I decided to combine my twin loves of programming and board gaming to build my first full-stack project using these technologies. This was a web app called <a href="https://boarpp.herokuapp.com" className="articleLink" target="_blank" rel="noopener noreferrer">Boarpp</a>: a social media project for baordgamers to share boardgame-related texts, pictures and links, and discuss them with other users.
        </p>
        <br />   
      </div>
          
        </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
