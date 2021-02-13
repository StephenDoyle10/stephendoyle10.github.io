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
        <br/>
        <p className="publishedDate">27 Jan 2021</p>
        <p>Luckily there is a fairly straightforward way to deploy a front-end React project online for free, for the world to see! This is done using GitHub, and more specifically, their GitHub pages feature. There are a number of steps involved in this, which this article goes through. Also, be advised that for this to work you will need:<br/>
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
        <p><span className="italic">What does this do?</span>&nbsp;The git init command creates or initializes a new Git project, or repository. It creates a .git folder with all the tools and data necessary to maintain versions. This command only needs to be used once per project to complete the initial setup.</p>
        

        <h4>Step 6</h4>
        <p>Still in the terminal, back in the browser on the github website, on the page you were redirected to when you created your repository, copy the full line that begins: 'git remote add origin...'. Paste this into the terminal and press enter.</p>
        <p><span className="italic">What does this do?</span>&nbsp;We have previously initialized the repository (step 5), and we also have a remote repository at GitHub.com. With step 6, we add the remote URL to our local git repository. This stores the remote URL under a more human-friendly name: origin. We will be using 'origin' in a subsequent step.</p>


        <h4>Step 7</h4>
        <p>Then type 'npm run deploy' and enter. (You may be asked for your GitHub username and password in the terminal)</p>
        <p><span className="italic">What does this do?</span> When you run 'npm run deploy', the scripts properties inside the package.json file are checked in order to decide what to do next. The "predeploy" script will run first: "npm run build". This builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified. So after 'npm run build' is performed for the first time, you'll notice that your locally-hosted project now has a build folder, which contains that is not very human-friendly, but it optimized for better performance.</p>
        <p>After the predeploy script (ie "npm run build") is performed, the deploy script runs. This is "gh-pages -d build"</p>
        
        
        <h4>Step 8</h4>
        <p>In terminal, run 'git add .' and enter. This adds files from the working directory to the staging area</p>
        <p>Then run 'git commit -m "first deployment" '. This permanently stores file changes from the staging area, and into the local repository.</p>
        <p>Then run 'git push -u origin master'. This uploads local repository content to a remote repository. In this case, the remote repo is hosted on GitHub, but this could be hosted anywhere.</p>


        <h4>Finished!</h4>
        <p>If you go to your repository page now on GitHub, and go to settings, you should see a green box with info telling you where your project has been published online.</p>

        <h2>Making changes and updating your project</h2>
        <p>So the above steps are how to deploy your lovely new react app to the internet using GitHub. But of course, you'll be making changes to your app over time, and improving it. How should you update your changes?</p>
        <p>On your GitHub repository for your react project there are two branches, the 'gh-pages' branch, and the 'master' branch. The 'master' branch is the same as the code you write on your IDE on your computer/ The 'gh-pages' branch is where this original code has been bundled, using Webpack, for optimal performance in production. Your app is deployed from here.</p>
        <p>When you make changes to your code in your IDE to the locally stored files, these changes have to be updated to both the master branch and the gh-pages branch on your remote GitHub repository. To update the 'gh-pages' branch, type 'npm run deploy' in the terminal. The 'gh-pages' branch has now updated, and as the deployed app that you see online comes from here, these updates are also reflected in the app as you see it online.</p>
        <p>HOWEVER, the master branch on GitHub has not been updated. To do this you must type the following three commands into the terminal:</p>
        <p>git add .</p>
        <p>git commit -m "commit message"</p>
        <p>git push -u origin master</p>
        <p>After following these steps, the updated code as it exists on your computer should be identical to the code on the master branch of your GitHub repo, while on the 'GH-pages' branch there will be a bundled build of these updates, and so your deployed app online will have the nexessary updates.</p>
      
        

        
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default DeployingReact;