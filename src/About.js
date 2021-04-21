import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

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
              <h3>In brief:</h3>
              Here are all the technologies that I have hands-on practical experience with:
              <br/>
              <br/>
              <ul>
              <li>{'\u2022'} JavaScript</li>
              <li>{'\u2022'} MERN Stack</li>
              <li>{'\u2022'} React</li>
              <li>{'\u2022'} Nodejs</li>
              <li>{'\u2022'} MongoDB</li>
              <li>{'\u2022'} Express</li>
              <li>{'\u2022'} NPM</li>
              <li>{'\u2022'} TypeScript</li>
              <li>{'\u2022'} HTML</li>
              <li>{'\u2022'} CSS</li>
              <li>{'\u2022'} SASS</li>
              <li>{'\u2022'} Bootstrap</li>
              <li>{'\u2022'} Testing with Mocha</li>
              <li>{'\u2022'} RESTful APIs</li>
              <li>{'\u2022'} GraphQL</li>
              <li>{'\u2022'} Git</li>
              <li>{'\u2022'} GitHub</li>
              <li>{'\u2022'} Babel</li>
              <li>{'\u2022'} Webpack</li>
              <li>{'\u2022'} ESLINT</li>
              
              </ul>
              <br/>
              <br/>
              <h3>In detail:</h3>
              <br/>
              <p className="quote">'Problems are opportunities in disguise'</p>
              <br />
              <p>
                I think we can all agree 2020 was a terrible year! With
                quarantines, lockdowns, self-isolations, and all that kind of
                fun stuff, most of us had a lot of free time on our hands. I
                decided to make lemonade with 2020's lemons, and use the extra
                free time to finally really get into the weeds of a hobby that
                had always captivated me: programming.
                <br />
                <br />
                <h5>HTML, CSS and JS</h5>
                Although my previous work experience has been in recruitment,
                and in teaching English as a foreign language, I knew there were
                a lot of successful self-taught programmers out there. Like a
                lot of people, I was already familiar with{" "}
                <span className="bold">HTML</span> and{" "}
                <span className="bold">CSS</span>, but in 2020 I started to
                teach myself JavaScript for the first time, and quickly came to
                appreciate the flexibility and power of the language.
                <br />
                <br />
                Once I had spent time learning{" "}
                <span className="bold">JavaScript</span> theory, such as{" "}
                <span className="bold">regular expressions</span>,{" "}
                <span className="bold">methods</span>,{" "}
                <span className="bold">algorithms</span>,{" "}
                <span className="bold">data-structures</span>, and{" "}
                <span className="bold">ES6</span>, I started to put this theory
                into practice by adding JavaScript to HTML/CSS front-end
                projects as a way to produce single-page web applications that
                were responsive to user inputs. Of course, as is the tried and
                tested and clichéd path, I built a{" "}
                <a
                  href="https://stephendoyle10.github.io/The-Queerculator/"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calculator
                </a>{" "}
                first! Next came an interactive javaScript string method{" "}
                <a
                  href="https://stephendoyle10.github.io/JS-String-Methods/"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cheat sheet
                </a>
                , and then a{" "}
                <a
                  href="https://stephendoyle10.github.io/UK-Salary-Calculator/"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UK Salary Calculator
                </a>
                .
                <br />
                <br />
                <h5>Node.js, Express.js and MongoDB</h5>
                The next challenge was to turn my hand to{" "}
                <span className="bold">full-stack development</span>, and, in
                particular, to use technologies such as{" "}
                <span className="bold">Node.js</span>,{" "}
                <span className="bold">Express</span> and{" "}
                <span className="bold">MongoDB</span>. I decided to combine my
                twin loves of programming and board gaming to build my first
                full-stack project using these technologies. This was a web app
                called{" "}
                <a
                  href="https://boarpp.herokuapp.com"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Boarpp
                </a>
                : a social media project for baordgamers to share
                boardgame-related texts, pictures and links, and discuss them
                with other users.
                <br /> <br />
                <h5>React</h5>
                Happy with my progress in Node, next I wanted to start building{" "}
                <span className="bold">React</span> projects. My first practical project was to refactor my
                portfolio website from being a traditional HTML, CSS and JS
                project into being a React project. I successfully achieved
                this, and the website you are currently viewing is built with
                the magic of React! 
                <br/>
                <br/>
                <h5>MERN stack</h5>
                So, by now I had used React in a project, and used MongoDB, Express and Node.js in another project, but the next challenge was to build a project that contained all these technologies together - this would be an example of the popular <span className="bold">MERN stack</span>. Integrating all these technologies together can get very complex, so to start with, as an exercise, I set out to build as minimal a MERN stack project as possible, but one which still had full CRUD capabilities (ie the capability for users to create, read, update and delete content), with the idea that such a minimal project could be used as a foundation/ template for more ambitious projects. This <a
                  href="https://ui-stevs-guestbook.herokuapp.com"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guestbook
                </a> was the result.
              </p>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;

