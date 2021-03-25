import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gist from "react-gist";

class MERNSetUp4 extends React.Component {
  render() {
    const articleName = "Setting up a basic MERN stack project: Part 4";
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p>
                <Link as={Link} className="plainP" to="/blog">
                  Blogpost
                </Link>{" "}
                &gt; {articleName}
              </p>
              <br />
              <h3 className="subheading">{articleName}:</h3>

              <h4 className="subheading">Displaying our first data</h4>
              <br />
              <p className="publishedDate">14 March 2021</p>
              <p>
                This is Part 4 of our complete walkthough to setting up a basic
                bare-bones MERN stack project with full CRUD capabilities. If
                you had followed along with parts 1 and 2, your code should look
                like{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/03"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this
                </a>{" "}
                currently. If at any point you get stuck you can view how the code
                is supposed to look by the end of this post{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/04"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>So far our project has simply displayed a 'Hello world!'' message. However, if our app is to be a full stack project allowing full CRUD capabilities, it will have to do more than display 'Hello world!' So what are we going to build? Our aim is not to bulid anything fancy, but rather to create a bare bones MERN stack project, but one that still has full CRUD capabilities. By creating something with such few frills, we can clearly see what a MERN stack project looks like when stripped down to its bare essentials, and with all embellishments removed. To this end, we will be building a guest book, in which any user can visit the site and (C)reate and leave a greeting message, can edit or (U)pdate their message if they wish to make a change,can (R)ead thier own and other people's messages that have been left there, or can (D)elete their message if they wish (and so the four CRUD features are accounted for - create, remove, update and delete). </p>
              <p>Eventually, all our data (the greeting messages, and the names of those who wrote the messages) will be stored on, and retrieved from, a database - in this case MongoDB (the M of MERN stack), but for now we will include some rudimentary data for demonstration purposes and store it as an array inside our project code. Let's set up this data now, in a new file called data.js, which we will save in the src folder. Set up the array of data as followed:</p>
              <Gist id="11e0a8a14862b066637e9c4778f9a747" />
              <p>So this data represents three greeting messages. As for the line at the end: 'module.exports = greetingsData;' - for the functions or variables contained within any JavaScript files to be made available to other JavaScript files in the same project, we must export it (while the file that needs it must import it, which we will see in a moment). We want the variable greetingsData to be available to another file, so we must export it.</p>
              <p>We will create our first actual React component now (as App.jsx is actually an element, not a component). This component will map through the three objects in greetingsData and render that data to the screen. Create a file called Greetings.jsx and save it in the src folder. Fill up the file like this:</p>
              <Gist id="2a6daa6b66c4a532dc56c483d5b24d70" />
              
              
              
              <p>
                Currently, the code and folder structure of your project should
                look identical to branch 04 of the project hosted here on
                GitHub:{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/04"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/StephenDoyle10/MERN_Stack/tree/04
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MERNSetUp4;

