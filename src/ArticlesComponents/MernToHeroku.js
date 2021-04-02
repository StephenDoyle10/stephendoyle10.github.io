import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class MernToHeroku extends React.Component {

  render() {
    const articleName = "Deploying a MERN stack project to Heroku";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p><Link as={Link} className="plainP" to="/blog">Blogpost</Link > &gt; {articleName}</p>
              <br/>
              <h3 className="subheading">{articleName}</h3>
              <br/>
              <p className="publishedDate">01 April 2021</p>
              <p>GitHub Pages is a fairly straighforward, and free, way to deploy front end projects, and get them online. I am definitely a fan, and have used GitHub pages to deploy all my front end projects, including my salary calculator, and also my personal portfolio webiste (which is the website you are looking at right now!). However, when it comes to full stack projects (in other words, a project in which users can signin and create their own content on the site) we need to look further afield than GitHib Pages, as GitHub Pages can only handle front end projects. One of the most popular free choices for deploying full stack projects is Heroku, and in this blog post I'll be looking at MERN stack projects specifically, and how to deploy them on Heroku. </p>
              <h4>A word on MERN project architecture</h4>
              <p>You can see the code for an example MERN stack project <a
                  href="https://github.com/StephenDoyle10/Guestbook"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
            </a>. Note how it uses two servers, which is a popular approach to MERN stack project architecture. One server serves static files (this, as well as all associated files, is kept in the UI folder). The other server hosts just the API (this, along with associated files, is kept in the API folder). This is important, because it means that on Heroku we will actually be creating and deploying 2 applications (an API application and a UI application), not just one.</p>
            <p>We'll start with the API application, but first we'll have to create a Heroku account, if we don't already have one. This can be done from https://heroku.com. We'll also have to install the Heroku CLI (command line interface), which further requires that we have Git installed on our device. The Heroku CLI enables us to perform important Heroku-related actions in the terminal. Once you have installed the necessary software, you can type 'heroku login' in the terminal to make sure you are logged in.</p>
            <h4>API application</h4>
            <p>Now we are ready to create and deploy our API application. Before deploying, make sure the server.js file has the following line near the top:</p>
            <pre><code>const port = process.env.PORT</code></pre>
            <p>This is because Heroku will set the port number itself, as an environment variable, which can be accessed at 'process.env.PORT'. This is where you want the app to listen. If you try and choose your own port number (eg 3000, or 8000, or whatever), the deployment will fail.</p>
            <p>Next, ensure you have a .gitignore file in the API folder, that contains the line 'node_modules', as we want Heroku to ignore the node modules in the folder, as Heroku will run 'npm install' anyway after copying over the files from the Git repository. Since we have package.json and package-lock.json files, Heroku will know which node modules are to be installed.</p>
            <p>Next, with the terminal open and pointing to the API folder, we have to make the following commands (if you are familiar with GitHub, these are the same commands you execute when preparing to push a project to GitHub via the terminal, except now we will be pushing the project to Heroku, not GitHub):</p>
            <pre><code>
                git init<br/>
                git add .<br/>
                git commit -m "first commit" <br/>
            </code></pre>
            <p>Now you have to create and initalise the application on Heroku.</p>
            <pre><code>
                heroku create stephen-doyles-api-app*
            </code></pre>
            
            <p>*Call the app whatever you want here, although it has to be a unique name that no one has used on Heroku before.</p>
            <p>After creating the app on Heroku, we can now store configuration variables, which are the same as environment variables. The key config variable we have to save is the MongoDB database URL, which can be saved in the terminal line with the following command:</p>
            <pre><code>
                heroku config:set DB_URL=mongodb+srv://atlas_account_username:atlas_account_password@cluster0.nimhz.mongodb.net/database_name 
            </code></pre>
            <p>Now the app is ready to be deployed on the cloud with a simple push operation to the Heroku remote:</p>
            <pre><code>    git push heroku master
            </code></pre>
            <p>If everything was successful, you will see a line saying that deployment was verified and done. You will also get a message something like this: 'https://stephen-doyles-api-app.herokuapp.com/ deployed to Heroku'. If this was a front end project, you would be able to visit this URL and see your site/app online, but as this is only a back end server right now, going to the page will only show an error message.</p>
            <h4>The UI Application</h4>
            <p>A similar set of steps are required to get the UI part of the code deployed on Heroku. Again, make sure you have the following line of code near the top of your ui server file:</p>
            <pre><code>const port = process.env.PORT</code></pre>
            <p>Also, in our code we have to change the API endpoint URL. In development mode, the API endpoint URL was on our locally hosted API server: http://localhost:5000/graphql. But now we will be getting our API endpoint from our recently deployed API application. In this case, it is: https://stephen-doyles-api-app.herokuapp.com/graphql. </p>
            <p>Then you will be making the same set of git commands you made for the API application, except this time the terminal must be open in the UI folder, and not the API folder.</p>
            <pre><code>
                git init<br/>
                git add .<br/>
                git commit -m "first commit" <br/>
            </code></pre>
            <p>Now you have to create and initalise the application on Heroku.</p>
            <pre><code>
                heroku create stephen-doyles-ui-app
            </code></pre>
            <p>Now the app is ready to be deployed on the cloud with a simple push operation to the Heroku remote:</p>
            <pre><code>    git push heroku master
            </code></pre>
            <p>If everything was successful, you will see a line saying that deployment was verified and done. You will also get a message something like this: 'https://stephen-doyles-ui-app.herokuapp.com/ deployed to Heroku'. As this is a front end app we can actually visit this URL and our project is now online for the world to visit.</p>
            <h4>Making changes and updating your project</h4>
            <p>So the above steps are how to deploy your lovely new full stack app to the internet using Heroku. But of course, you'll be making changes to your app over time, and improving it. How should you update your changes?</p>
            <p>This couldn't be simpler. With the terminal open in the relevant foler (the API folder if you want to update the API app, or the UI folder if you want to update the UI app), simply repeat these three steps that you used to initally deploy the app:</p>
            <pre><code>
                git add .<br/>
                git commit -m "update"<br/>
                git push heroku master<br/>
            </code></pre>
            <p>And that's pretty much it!</p>

            


              
              
            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default MernToHeroku;