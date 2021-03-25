import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gist from "react-gist";

class MERNSetUp3 extends React.Component {
  render() {
    const articleName = "Setting up a basic MERN stack project: Part 3";
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

              <h4 className="subheading">More Babel and Webpack</h4>
              <br />
              <p className="publishedDate">12 March 2021</p>
              <p>
                This is Part 3 of our complete walkthough to setting up a basic
                bare-bones MERN stack project with full CRUD capabilities. If
                you had followed along with parts 1 and 2, your code should look
                like{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/02"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this
                </a>{" "}
                currently. In part 2 we added React to our project, as well as
                some Babel and Webpack which are almost essential to any React
                project. If at any point you get stuck you can view how the code
                is supposed to look by the end of this post{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/03"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <h4>Babel and support for older browsers</h4>
              <p>
                We spent some time with Babel and Webpack in part 2, but we are
                not quite done with them yet. In that post we used just enough
                Babel so that our project would run in the browser. We utilized
                the aspect of Babel that converts JSX into JavaScript. However,
                there is a further Babel feature that it is considered best
                practice to include, which we will add now.
              </p>
              <p>
                So why is this extra bit of Babel necessary? JavaScript is
                always evolving and growing, often at a faster rate than
                browsers can keep up with. In other words, your project may
                include some cutting edge modern JavaScript, whereas the
                browser's runtime engine has not been updated to be able to
                execute that code. If so, an error will be thrown and the
                project will likely crash. This is where Babel comes in. On the
                development side, you can write code using the very latest
                JavaScript features (for example, all the features that came
                with ES6, such as arrow functions), then before putting this
                code into production, you can run it through Babel which
                transpiles the code so that it can run on older browsers
              </p>
              <p>
                We do this by installing babel.preset-env, so on the command
                line run 'npm install --save-dev @babel/preset-env'. The let's
                create a babel configuration file that tells the program the
                browser support we require. This file will be called .babelrc
                and we will put it in the src folder. Populate the file as
                follows:
              </p>
              <Gist id="30b3988df1d93f5914bdd2e08e65c45a" />

              <p>
                The last time we compiled the jsx with Babel we used the command
                line instruction "npx babel src --presets @babel/react --out-dir
                public". However, now that we have the presets stated in a
                config file, now we only need to type "npx babel src --out-dir
                public". Do this now. You will see that the App.js is now
                slightly different than before, as it has been compiled into
                older syntax, although the functionality remains the same.
              </p>
              <p>
                Let's do two more quick precautionary bits of housekeeping which
                may end up not being necessary, but could save us from headaches
                and bugs down the road depending on the direction the project
                takes. Install the following two packages with the following
                command: 'npm install whatwg-fetch babel-polyfill'. Then add
                them to App.jsx by adding these two lines at the top of the
                file: "import 'babel-polyfill' " and "import 'whatwg-fetch' ".
                What does this do? Simply, there is some modern functionality
                not supported by older browsers, and using these packages
                ensures that the app will not crash if it attempts to use such
                functionality.
              </p>
              <h4>Combining Babel and Webpack into a single build step</h4>
              <p>
                So currently, when we create a JSX component, in order for it to
                be executed in the browser we have to transform it into a new
                file with Babel. Then we need to bundle that new file with
                Webpack to create another file (<i>main.js</i>). These are
                called 'build steps', and at the moment it takes two build steps
                to convert JSX into a file the browser can execute. Luckily,
                however, Webpack can be configured with Babel, so that Webpack
                can combine both steps into a single step. For this we need to
                "npm install --save-dev babel-loader", and also create a file
                called <i>webpack.config.js</i> in the <i>ui</i> folder.
              </p>
              <p>
                When bundling with webpack, it is considered good practice to
                separate application code and library code (ie the code from
                Node Modules). Currently, webpack is bundling our JSX file (and
                any other files we may write), with the 100s of node_modules we
                are using. We can configure Webpack so that our App code is
                bundled into a file called <i>app.bundle.js</i>, while code from
                third party libraries we use is bundled into a file called{" "}
                <i>vendor.bundle.js</i>. To do this, the{" "}
                <i>webpack.config.js</i> file should look like this:
              </p>
              <Gist id="8764d634c6e10266e7db3bea8fdfe0ed" />

              <p>
                Previously, to run webpack and bundle our files, we used the
                command line "npx webpack ./public/App.js --output-path public
                --mode development". Quite a mouthful! However, since we have a
                configuration file now, all we have to type in the command line
                to use webpack now is "npx webpack". Try it now (although first
                delete <i>main.js</i> - our pre-existing bundled file in the
                public folder). After typing "npx webpack", did you see two
                bundled files (<i>app.bundle.js</i> and <i>vendor.bundle.js</i>)
                appear in the public folder? If so, then all is well!
              </p>
              <p>
                So now every time we use webpack, all our code will be bundled
                into two JavaScript files, <i>app.bundle.js</i> and{" "}
                <i>vendor.bundle.js</i>. However, currently our html file has
                just one script attribute, and it is pointing to <i>main.js</i>.
                Our app code is now being bundled to <i>app.bundle.js</i>, so
                let's make our script attribute point here, instead of to{" "}
                <i>main.js</i>, and also let's add a second script attribute
                that points to <i>vendor.bundle.js</i>. Your index.html file
                will now look like this:
              </p>
              <Gist id="a7051ce81b6583a5cf563917119c8d44" />

              <p>
                Run the project now with "npm start" and see if we have our
                'Hello world!' message at localhost:4000.
              </p>
              <h4>Watch</h4>
              <p>
                So, anytime we make changes to our code we just have to run "npx
                webpack" to transform our code into a production-ready bundle.
                Awesome, right? Well, it gets even better, as webpack has an
                option that looks out for any changes that are saved to the JSX
                files, and then automatically bundles the changes. To do this,
                type 'npx webpack --watch' in the terminal. On doing this,
                webpack straightway creates a new bundle of all relevant JSX
                files (which may take a while), then it stays open and sits in
                wait for when you save any changes. When it detects any changes,
                it immediately creates a new bundle (without you having to
                direct it to in the command line with 'npx webpack'). Let's try
                this: type 'npx webpack --watch', and you will see a fresh
                bundle is created. Now go to your App.jsx file, and change
                'Hello world!' to 'Hello Universe!' and then save your changes.
                In the terminal you should see webpack jump into life the moment
                you click on save, and create a new bundle, and if you checked
                on localhost:4000 you should see our message now says 'Hello
                universe!' instead of 'Hello world!' (a page refresh may be
                necessary). And in fact, let's create a 'watch' script in the{" "}
                <i>package.json</i> file to make this process even simpler. In
                the <i>package.json</i> file, under the start script, add the
                following watch script: "watch": "webpack --watch". Now to start
                webpack watching, instead of typing 'npx webpack --watch', you
                can just type 'npm run watch'.
              </p>
              <p>
                Currently, the code and folder structure of your project should
                look identical to branch 03 of the project hosted here on
                GitHub:{" "}
                <a
                  href="https://github.com/StephenDoyle10/MERN_Stack/tree/03"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/StephenDoyle10/MERN_Stack/tree/03
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MERNSetUp3;

