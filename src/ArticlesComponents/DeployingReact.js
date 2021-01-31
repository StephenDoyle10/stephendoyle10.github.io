import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class DeployingReact extends React.Component {
  

  render() {
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
        <p><Link as={Link} className="plainP" to="/articles">Articles</Link > > Deploying React on GitHub Pages</p>
        <br/>
        <h3 className="subheading">Deploying React on GitHub Pages</h3>
        <p className="publishedDate">27 Jan 2021</p>
        <p>Luckily there is a fairly straightforward way to deploy your React project online for free, for the world to see! This is done using GitHub, and more specifically, their GitHub pages feature. There are a number of steps involved in this, which this article goes through. Also, be advised that for this to work you will need:<br/>
        1. a GitHub account,<br/>
        2. Node.js installed (check this by typing 'node --version' in the terminal),<br/>
        3. git installed (check this by typing 'git --version' in the terminal)<br/>


        </p>
        <br />
        <h4>Step 1</h4>
        <p>Navigate terminal to project directory</p>
        <h4>Step 2</h4>
        <p>On the GitHub website, on your profile, click on 'new repository'. Give the repository a name, click on 'public', although it is not necessary to give it a description or a readme now. Click on 'create'. The repository will be created and you will be redirected to a new page. Leave that page open and in the background for now, we will needing it later.</p>
        <h4>Step 3</h4>
        <p>Make sure the terminal is in the project folder, and then type 'npm install gh-pages --save-dev'. It will take a minute to install this package.</p>
        <h4>Step 4</h4>
        <p>In your IDE, open the project's package.json file. At the very beginning of the object, create a new key/value pair, like so: "homepage":"http://&#123;github username&#125;.github.io/&#123;github repository name&#125;"</p>
        <h4>Step 5</h4>
        <p>In the same package.json file you will need to add two key/value pairs at the top of the scripts object, like so: "predeploy":"npm run build",
    "deploy":"gh-pages -d build"</p>
        
        
        <h4>Step 5</h4>
        <p>Back in terminal (make sure it is in the right folder) type 'git init' and enter.</p>
        <p><span className="italic">What does this do?</span> 'git init' turns the directory you are in into a git repository.</p>
        

        <h4>Step 6</h4>
        <p>Still in the terminal, back in the browser on the github website, on the page you were redirected to when you created your repository, copy the full line that begins: 'git remote add origin...'. Paste this into the terminal and press enter.</p>
        <p><span className="italic">What does this do?</span>&nbsp;We have previously initialized the repository (step 5), and we also have a remote repository at GitHub.com. With step 6, we add the remote URL to our local git repository. This stores the remote URL under a more human-friendly name: origin. We will be using 'origin' in a subsequent step.</p>


        <h4>Step 7</h4>
        <p>Then type 'npm run deploy' and enter. (You may be asked for your GitHub username and password in the terminal)</p>
        <p><span className="italic">What does this do?</span> </p>
        
        
        <h4>Step 8</h4>
        <p>In terminal, type 'git add .' and enter.</p>
        <p>Then type 'git commit -m "first deployment" ' and enter. </p>
        <p>Then type 'git push -u origin master' and enter.</p>


        <h4>Finished!</h4>
        <p>If you go to your repository page now on GitHub, and go to settings, you should see a green box with info telling you where your project has been puclished to online.</p>

      
        

        
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default DeployingReact;