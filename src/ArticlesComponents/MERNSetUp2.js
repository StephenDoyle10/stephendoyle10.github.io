import React from "react";
import Gist from "react-gist";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class MERNSetUp2 extends React.Component {

  render() {
    const articleName = "Setting up a basic MERN stack project: Part 2";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
                <p><Link as={Link} className="plainP" to="/blog">Blogpost</Link > &gt; {articleName}</p>
                <br/>
                <h3 className="subheading">{articleName}:</h3>
                
                <h4 className="subheading">React, Babel and Webpack</h4>
                <br/>
                <p className="publishedDate">11 March 2021</p>
                <p>Welcome to Part 2 in our step-by-step guide to setting up a basic bare-bones MERN stack project with full CRUD capabilities. If you had follwed along with <Link className="articleLink" as={Link} to="/mernsetup1">part 1</Link>, your code should look like <a href="https://github.com/StephenDoyle10/MERN_Stack/tree/01" className="articleLink" target="_blank" rel="noopener noreferrer">this</a> currently. Now lets add React to our project (and if at any point you get stuck you can view how the code is supposed to look by the end of this post <a href="https://github.com/StephenDoyle10/MERN_Stack/tree/02"className="articleLink" target="_blank" rel="noopener noreferrer">here</a>)</p>
                <p>A common complaint about React is how difficult it is for beginners to get into, and we will see that now, as before we can even publish a simple 'hello world' message, we will have to get into the weeds of Babel and Webpack (Browserify or other alternatives are sometimes used instead of Webpack, but I prefer Webpack).</p>
                <h4>React Architecture</h4>
                <p>To show why Babel and Webpack are important for React, lets first take a quick look at the typical architecture of the React part of a MERN project. Typically, there will be a simple html file with a largely empty body, although there will be at least one element that has an id property. We call this a "root" DOM node because everything inside it will be managed by React DOM. Applications built with React usually have a single root DOM node. Elsewhere in the project directory, outside of this html file, there will be a JavaScript file that contains html-like code, and this file will be the main entry point for the app. This JS file is considered a parent, and there may be other JS files that contain more html-like code that can be rendered into that parent. These other JS files will be children of the parent. There might be yet more JS files with more html-like code that gets rendered into the children; these are considered children of the children. And so it continues, and soon a tree is formed, with the initial JS file parent at the top, and children below, and children of children below that and so on. There is a name for such a JS file: a component. Components are the building blocks of React and are essential to it.</p>
                <h4>JSX</h4>
                <p>So where does Babel come into it? These aforementioned JS components contain both JavaScript logic code, as well as code that ends up being rendered as html. Writing JS code that is supposed to result in html does not come naturally, and neither does it look pretty, and does not give us the neat and tidy indentations we get when we write pure html. To solve this problem, a syntax extension for JS was created called JSX (which stands for JavaScript XML), which allows us to write html directly into JS code, and is much more user friendly, and easier to read, write and debug. However, it should be kept in mind, you can forego JSX and write all your components in JS, although this is not recommended.</p>
                <p>So JSX makes it easy to use html in our JS code. Great, right? Yes, but it does come with a problem. Browsers all come with runtime engines that enables them to execute JavaScript. However, these engines are not designed to be able to understand JSX, and indeed they don't. A react project filled with JSX files will not work in the browser, as the browser will not know what to do with the JSX files. That's where Babel comes in: Babel is used to convert JSX files into JS files.</p>
                <p>Previously in this post, when speaking of typical React architecture, I mentioned how there will be a html file with a largely empty body, and a JS file that serves as the app's entry point that renders html into this html file. Lets set this up now. In fact, we already have the html file, except in our html file the body is not empty - it contains a 'Hello world!' message. Let's remove this message from the html file, as instead we will be rendering a JS element here. The empty &lt;div id=&quot;contents&quot;&gt;&lt;/div&gt; is now our root Dom node and everything inside it will be managed by React DOM. Also, while we are editing our html file, we will add a script attribute that points to the external JS file which contains our JSX element which will be our entry point to the app, that will render the 'hello world' message into the body of <i>index.html</i>. So here is how your html file should look now:</p>
                
                <Gist id ='2629f40abd1c75d1622a980bf3233989' />
                  
                
                <p>In a moment we will be creating our first JSX element but for this element to work we will need a couple of packages, so lets install these now. With the command line open in the <i>ui</i> folder, type 'npm install react react-dom'. As their names suggest, these two packages are crucial for React. Once these two packages are installed create a file called <i>App.jsx</i> in the src folder. It will look like this:</p>
                <Gist id ='865eb5eb4a74a80439c559f401e010e0' />
                
                
                <p>So what does this code mean? Well, we just installed React and React-dom, but actually it is no good just installing them. To use them in a file, you must import them. That is what is happening on the first two lines - React and React-dom are imported into the file, so that their methods can be used. The line after this contains the html element that will be rendered into the <i>index.html</i> file. The final line is the code that does the rendering: ReactDom's render method takes two arguments - firstly, the element which is due to be added somewhere, and secondly, the element where it is to be added - in this case, it will go looking for an element with the id of 'contents', which, if you recall, is the empty div element in <i>index.html</i>.</p>
                <h4>Transforming JSX to JS with Babel</h4>
                <p>So this is easy right? All you have to do now is run 'npm start' in the command line and our element will be rendered in the html file, which we can see on localhost:4000? Unfortunately not. Remember we said browsers cannot read JSX! So this is when we bring in Babel. </p>
                <p>For this we need to use npm to install three different Babel related packages. The first is babel core, which is the core babel library. The seceond is babel cli, which enables us to use Babel commands on the command line, and the third is babel preset-react, which are important presets for react. So simply type 'npm install --save-dev @babel/core @babel/cli @babel/preset-react' to get them all (and as you do so, you should surely by now be starting to see why npm is so great right?!)</p>
                <p>Now we can transform our App.jsx file into pure JS. The following command line does that, and outputs the new JS file in the public folder: "npx babel src --presets @babel/react --out-dir public"</p>
                <h4>Bundling files with Webpack</h4>
                <p>Wonderful! Now we can run the server with 'npm start' and the JS file will render in the html file and we can see out glorious 'hello world' message in localhost:4000, right? Well, no, not yet, sadly. There is another problem. You remember when I said a typical React project usually ends up containing lots of different components - a tree of parents and children - each in its own JS file. These are called modules, but browsers do not like modules, they prefer all the JavaScript to be in a single file, and trip over typical module methods such as 'require', and throw an error. This is where webpack comes in. Webpack bundles the different modules into a single file.</p>
                <p>So let's install webpack with "npm install --save-dev webpack webpack-cli". And with the following command, we can tell webpack to take our <i>App.js</i> and bundle it together with its dependencies (in this case React and React-dom), and to output a new file in the public folder: "npx webpack ./public/App.js --output-path public --mode development". This new file has the default name of <i>main.js</i>, and you should see it in your public folder now. If you recall, we have already pointed to this in the script attribute in our html file: "&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;". This means you can now run "npm start" and if you go to localhost:4000 in your browser you should see 'hello world' in all its glory!</p>
                <p>Well done, you know have React, Express and Node.js all up and running and in harmony with each other!</p>
                <h4>Recap</h4>
                <p>Let's recap the steps:</p>
                <p>Step 1: Modify the index.html.</p>
                <p>Step 2: Create a file in the src folder called App.jsx.</p>
                <p>Step 3: Install babel/core, babel/cli and babel/preset-react with npm.</p>
                <p>Step 4: Run "npx babel src --presets @babel/react --out-dir public" to transform App.jsx into App.js, ie valid JavaScript.</p>
                <p>Step 5: Install webpack and webpack-cli with npm.</p>
                <p>Step 6: Run "npx webpack ./public/App.js --output-path public --mode development" to transform App.js and its dependencies into main.js, which the browser will be able to execute when the app is launched.</p>

                <p>Currently, the code and folder structure of your project should look identical to branch 02 of the project hosted here on GitHub: <a href="https://github.com/StephenDoyle10/MERN_Stack/tree/02"className="articleLink" target="_blank" rel="noopener noreferrer">https://github.com/StephenDoyle10/MERN_Stack/tree/02</a></p>
                
              
            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default MERNSetUp2;
