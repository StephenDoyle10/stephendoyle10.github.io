import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class AsyncJSArticle extends React.Component {

  render() {
    const articleName = "Asynchronous Javascript";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
        <p><Link as={Link} className="plainP" to="/articles">Articles</Link > > {articleName}</p>
        <br/>
        <h3 className="subheading">{articleName}</h3>
        <br/>
        <p className="publishedDate">20 Jan 2021</p>
        <p>Aysynchronous JavaScript touches on a lot of different concepts, such as callback functions, higher order functions, ‘callback hell’, single- vs multi-threaded code, I/O blocking/non-blocking, the Javascript runtime, the event loop, the call stack, task queue, promises, async/await, web apis, and node apis. It can seem overwhelming, however the aim of the following article is to explain all these concepts and show how they all fit together.</p>
        <br />
        <h4>What is asynchronous programming and why is it important in web development?</h4>
        <p>Let’s say you are looking for cheap hotel rooms for your holiday, and you use a website like Trivago that compares prices from hundreds of different sites. You enter in your trip dates and preferred location and when you click submit, Trivago gets to work trawling these hundreds of other websites for the best deals. It will likely take a number of seconds for this request to complete, and to retrieve the requested data.</p>
        <p>Now, if the website makes a synchronous request, the execution of further code will be blocked until the request is completed and the required data is retrieved, which causes the website to freeze. Not good. But if the website makes an asynchronous request, the browser can continue to execute other code and work as normal, while the request is being completed in the background.  With asynchronous programming, JavaScript can run parts of tasks and continue to other tasks while the previous tasks complete; it does not have to wait for each individual task to complete before moving on to the next one.</p>
        <br />
        <h4>Is JavaScript an aynchronous language?</h4>
        <p>JavaScript is a <span className="bold">single-threaded</span> language, which means no two bits of script can run at the same time (contrast with Java or C#, which are <span className="bold">multi-threaded</span> so can run different pieces of script parallel with each other). This means, by default, and at its core, Javascript is a synchronous language. However, JavaScript can also be made to work asynchronously, which is what makes it so efficient and powerful for both frontend and backend web development, and means a website built with JavaScript doesn’t freeze when, for example, performing an API request.</p>
        <p>Asynchronous javascript has gone through various stages of development over the years, becoming more and more refined and sophisticated. The earliest way to achieve asynchronous JavaScript was with the use of <span className="bold">callback functions</span>, although, as we will see, this had its problems, and often resulted in code that was difficult to write, read and debug. <span className="bold">Promises</span>, a more elegant way to enable asynchronous JavaScript, was integrated in the ES6/ECMA2015 JavaScript revision. Promises made asynchronous JavaScript code more pleasant to read and write, and in the ES8/ECMA2017 JavaScript revision, more syntactic sugar was added to these promises, with the addition of the ‘<span className="bold">async...await</span>’ syntax.</p>
        <br />
        <h4>Callback functions</h4>
        <p>Sometimes a function will take another function as one of its parameters. In this case, the function that takes the function as a parameter is called a <span className="bold">higher order function</span>, whereas the function that is used as an argument in the higher order function is called a <span className="bold">callback function</span>. Many callback functions are synchronous/ blocking, like Javascript in general. However, often callbacks are used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.</p>
        <p>The simplest way to do this is with the setTimeout() method. setTimeout() takes a functions as an argument - ie a callback function. Look at the following code:</p>
        <pre><code>console.log(“hello”);<br />console.log(“goodbye);</code></pre>
        <br />
        <p>When this is run, the following will be logged to the console:</p>
        <pre><code>hello<br />goodbye</code></pre>
        <p>Both methods are blocking (which means they block the running of subsequent code until they have finished), and run synchronously, from top to bottom.</p>
        <p>Now look at the following code:</p>
        <pre><code>setTimeout(()=&gt;{"{"}console.log("hello"){"}"}, 1000); <br />console.log(“goodbye");</code></pre>
        <p>In this code, console.log(“hello") is now an anonymous callback function inside the setTimeout method, and this method has been told not to execute the callback for 1000 ms (1 second). setTimeout method is non-blocking; when it is called, the operation is taken over by the browser, leaving JavaScript to run any subsequent code. The browser/web API takes care of the countdown timer of 1000ms, and when the timer is up, the callback function joins the call stack (via the task queue and the event loop) to be carried out by the JavaScript interpreter. Ultimately, when this code is run, the following will be logged to the console:</p>
        <pre><code>goodbye<br />hello</code></pre>
        <p>Node.JS runs on similar principles, and makes heavy use of callback functions. When the higher order function is first called, the operation is offloaded to the system kernel, until it is complete, then passed back to the call stack (via the task queue and event loop) to be carried out by the JavaScript interpreter.</p>
        <p>For example:</p>
        <pre><code>findData(database,(err, result)=&gt;{"{"}<br />&nbsp;&nbsp;&nbsp;displayResults(result){"}"}) </code></pre>
        <p>Here, findData() is a method that fetches data from a database. When this is called, the operation is offloaded to the system kernel, which proceeds to retrieve the requested data, while JavaScript is freed up to execute any subsequent code in the process. When the data has been successfully retrieved, the operation is passed back to JavaScript to execute the callback [displayResults(result)], which displays results on the webpage.</p>
        <p>It is probably helpful to see this explained in Node's own words. This is taken from their own <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/">documentation</a>:</p>
        <blockquote>The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.</blockquote>
        <br />
        <h4>Promises, and Async/Await</h4>
        <p>Callbacks work fine for small operations, but when a project becomes more ambitions, it will likely start to have callbacks within callbacks within callbacks, and so on. For example, your project may make a request to a database, and use the returned data to make another request, and use the returned data of that request to make another request, and so on. This results in something that has been nicknamed the ‘pyramid of doom’, or ‘callback hell’, and it results in code that is difficult to write, read, and debug.</p>
        <p>Promises were implemented in ES6/ECMA 2015 in order to tackle the problem of callback hell. With promises, asynchronous code can be written to look like synchronous code ie neatly aligned vertically, rather than being nested and lurching ever further to the right. The advantage of this is that synchronous code always looks more natural and intuitive to human eyes, and easier to read, write and debug, than asynchronous code.</p>
        <p>With ES8/ECMA2017, Async/ Await syntax was implemented. This is just syntactic sugar for Promises, meaning it doesn’t introduce any new functionality. The main benefit is that with async/ await, one can write asynchronous code, yet it looks even more like synchronous code and eliminates nesting, making it is easier to read, write and debug (as asynchronous code is often counter-intuitive and difficult to read).</p>
        <br />
        <p>Further reading:</p>
        <p>MDN Web Docs: Concurency model and the event loop:</p>
        <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop">https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop</a></p>
        <br />
        <p>Video of Philip Robert’s famous presentation ‘What the heck is the event loop anyway?’:</p>
        <p><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">https://www.youtube.com/watch?v=8aGhZQkoFbQ</a></p>
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default AsyncJSArticle;