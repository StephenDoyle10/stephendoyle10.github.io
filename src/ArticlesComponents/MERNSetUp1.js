import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gist from "react-gist";

// eslint-disable-next-line
{
  /* <p></p> */
}

class MERNSetUp1 extends React.Component {
  render() {
    const articleName = "Setting up a basic MERN stack project: Part 1";
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

              <h4 className="subheading">
                Our first HTML file, installing Node and NPM, and our first
                Express server
              </h4>
              <br />
              <p className="publishedDate">10 March 2021</p>
              <p>
                The MERN stack is one of the best stacks in which to build large
                scale web projects. However, the initial set-up, even to build a
                simple bare-bones project, can be intimidatingly complex for
                people who are new to programming. This is part 1 of a series of
                blogposts that guides you to creating a simple bare-bones MERN
                stack project with full CRUD capabilities. These posts are not
                for someone completely new to the MERN stack, but rather they
                are better suited to someone who is familiar with the
                technologies and wants a succinct reminder on how to set up a
                project.
              </p>
              <h4>Project structure and html</h4>
              <p>
                Lets start by creating a folder in your desired location on your
                computer, which will contain all the code for the entire
                project. I called my folder <i>MERN_Stack_Bones</i>. Inside this
                folder, create another folder called <i>ui</i>, and inside this
                folder create two further folders, <i>src</i> and <i>public</i>.
                First, we will start with a simple html file. We will call this{" "}
                <i>index.html</i> and put it in the public folder. Add the
                following code to this file:
              </p>
              <Gist id ='b8256ec6e9c6fe8d9610df74d636dec3' />
            
              
            
              <p>
                You can open this by double clicking on the file in your
                device's file viewer, and it should open in your browser and
                display 'Hello world!'
              </p>
              <h4>Node.js and NPM</h4>
              <p>
                Now lets set up a server and serve this html file from the
                server. For this we will be using Node and Express (this
                represents the N and E from the MERN acronym). To do this you
                will need Node.js installed on your computer, which you can do
                very easily from nodejs.org. Once you have downloaded and
                installed Node.js from their website, you can check it has been
                installed successfully by typing 'node --version' (or 'node -v'
                if you prefer) into the command line. You should get a response
                like 'v12.18.3', in which case you can see it has been installed
                successfully. Importantly, when you download Node.js, you also
                get NPM, which you will be using a lot. Check you have NPM
                installed by typing npm --version (or npm -v) into the command
                line.
              </p>
              <p>
                Packages for your project will be very important, and you will
                no doubt end up using many of them. Express itself is a package
                you will be using, and all the packages will be installed using
                NPM. But before you can install any packages, you will have to
                initialise the project, which you do by typing 'npm init' on the
                command line (while the command line is in <i>ui</i> folder of
                the project root directory). For now, click 'enter' on all
                prompts from the command line to accept all the default settings
                of the initialisation. Once complete, you will notice you have a
                file named <i>package.json</i> file in the <i>ui</i> folder,
                which contains useful information about the project.
              </p>
              <h4>Express</h4>
              <p>
                Now that you have initialised the project with npm you can begin
                to install packages locally to the project. First and foremost
                of these, for our purposes, is the Express package. To do this,
                with the command line still in the <i>ui</i> folder, type 'npm
                install express'. Now the project has Express installed on it,
                which you can see by noticing the new node_modules folder in
                your project which contains Express.
              </p>
              <p>
                As we now have Express, we can create a server. Create a new
                file in the <i>ui</i> folder called <i>server.js</i> with the
                following code:
              </p>
              <Gist id ='98d1af8bfa2865a59bb6850308ddeaad' />
                
              
              <p>
                Now, in the command line (in the <i>ui</i> folder), you can type
                'node server.js', and the server will start, and serve{" "}
                <i>index.html</i>. To see it, open up your browser and type in
                http://localhost:4000 in the URL bar, and you will see our
                'Hello world!' page.
              </p>
              <p>
                Typing 'node server.js' is one way of launching the server,
                however it is considered good practice to create a start script
                which enables you to launch the same file by typing 'npm start'
                into the command line. To create this script, in the{" "}
                <i>package.json</i> file in the <i>ui</i> folder, under
                'scripts', create a new script like this: "start": "node
                server/server.js". Now, instead of typing 'node server.js' in
                the command line to start the server, you can just type 'npm
                start'.
              </p>
              <p>
                This is a great start in our journey to creating a simple MERN
                stack project with full CRUD capabilites, as we have already
                covered the E(xpress) and N(ode.js) parts of the MERN stack
                acronym.
              </p>
              <h4>Recap</h4>
              <p>Let's recap the steps:</p>
              <p>Step 1: create a project directory on the compute. Inside the project directory create a folder called ui. In the ui folder create two folders, one called public and one called src</p>
              <p>
                Step 2: create a basic 'hello world' file in index.html which goes in the public folder.
              </p>
              <p>
                Step 3: Download and install Node on our computer. Initialise
                the project (with the command line in the ui folder) with NPM so that we can start installing packages.
              </p>
              <p>
                Step 4: Install express locally, and create our server in a file
                called <i>server.js</i> (which goes in the ui folder), which serves the <i>index.html</i> file.
              </p>
              <p></p>
              <p>
                Currently, the code and folder structure of your project should
                look identical to branch 01 of the project hosted here on
                GitHub:{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/01"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/StephenDoyle10/MERN_Stack/tree/01
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MERNSetUp1;

