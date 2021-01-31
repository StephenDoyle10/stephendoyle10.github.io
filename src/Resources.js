import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";


class Resources extends React.Component {
  

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <div className="bodyContent" id="resources">
        <h2 className="subheading">Resources</h2>
        <br />
        <br />
        <p>Below is a list of some of the resources that helped me in my coding journey, and they all get the Stephen Doyle seal of approval!
        </p>
        <br />
        <h3 className="subheading">Online/ websites:</h3>
        <br />
        <p className="mediaName">freeCodeCamp</p>
        <a className="articleLink" href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org</a>
        <p>freeCodeCamp is an amazing free online course that I used early on in my coding journey. By the time I discovered freeCodeCamp I was already familiar with HTML and CSS, so I skipped the first module, and went straight to 'JavaScript Algorithms and Data Structures'. This was a revelation, I still return to certain sections as a refresher and to test myself. The following freeCodeCamp modules are not as detailed as its JavaScript one, but are still useful introductions to topics such as Bootstrap, Sass, D3, React and Node.</p>
        <br />
        <p className="mediaName">Codecademy</p>
        <a className="articleLink" href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">https://www.codecademy.com</a>
        <p>Codecademy has a huge catalogue of topics and courses, although most of the content is for paid subscribers only. I have only used it for HTML and CSS so far, but can say it was very good for that.</p>
        <br />
        <p className="mediaName">Reddit</p>
        <a className="articleLink" href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">https://www.reddit.com</a>
        <p>Reddit is a goldmine for programming content, whether it be discussions, advice, news, resources or something else, its all here. There are dozens of programming-related subreddits worth subscribing too, from general ones such as r/learnprogramming, r/webdev and r/compsci, to niche subreddits centred on a specific language or technology, such as r/javascript, r/node or r/reactjs. However, the one indispensible subreddit everyone should subscribe to is r/programminghumor!</p>
        <br />
        <p className="mediaName">Stack Overflow</p>
        <a className="articleLink" href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">https://stackoverflow.com</a>
        <p>The most popular programming and computer science help forum out there. If a programmer gets stuck on anything they can ask for help here, and will no doubt have a solution within hours. Although the chances are the question has already been asked and answered, so does not even require a new post.</p>
        <br />
        <p className="mediaName">Leetcode</p>               
        <a className="articleLink" href="https://leetcode.com" target="_blank" rel="noopener noreferrer">https://leetcode.com</a>
        <p>'Competitive programming' has really taken off in recent years, and there are many websites (with Leetcode being one of the best) that offer coding challenges that programmers use either for fun, or in order to sharpen their algorithm capabilities, often with a view to acing future programming interviews.</p>
        <br />
        <p className="mediaName">W3</p>
        <a className="articleLink" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">https://www.w3schools.com</a>
        <p>Very well-designed, straightforward and comprehensive website that has a page on practically every different aspect of HTML, CSS and JavaScript, as well as an increasing number of other languages and technologies. Each feature of HTML, CSS or JavaScript that is explained has sample code to demonstrate that feature, as well as a virtual browser window to show how that code looks in use.</p>
        <br />
        <h3 className="subheading">Podcasts:</h3>
        <br />
        <p className="mediaName">CodeNewbie</p>
        <p>Very accessible and wholesome podcast designed for new programmers (the clue is in the title!). Each episode deals with a single topic and is centred around an interview of a special guest.</p>
        <p className="mediaName">DevNews</p>
        <p>Very similar in tone to CodeNewbie (ie wholesome and accessible), and shares the same host. However, DevNews is more centered on current tech news.</p>
        <p className="mediaName">JavaScript Jabber</p>
        <p>A little less newbie-centric than CodeNewbie and DevNews, although still quite accessible, this features roundtable discussions with experts on hot issues, and interviews with special guests.</p>
        <br />
        <h3 className="subheading">Books:</h3>
        <h4 className="subheading">JavaScript Algorithms and Data Structures:</h4>
        <p className="mediaName"><span className="bookTitle">JavaScript Data Structures and Algorithms</span> by Sammy Bae</p>
        <p className="mediaName"><span className="bookTitle">Learning JavaScript Data Structures and Algorithms</span> by Loiane Groner</p>
        <p className="mediaName"><span className="bookTitle">Cracking the Coding Interview: 189 Programming Questions and Solutions</span> by Gayle Laakmann McDowell</p>
        <br />
        <h4 className="subheading">Bootstrap:</h4>
        <p className="mediaName"><span className="bookTitle">Bootstrap 4 - Responsive Web Design</span> by Silvio Moreto</p>
        <br />
        <h4 className="subheading">Node.js:</h4>
        <p className="mediaName"><span className="bookTitle">Beginning Node.js, Express and MongoDB Development</span> by Greg Lim</p>
        <p>This is book is less than 150 pages but somehow still manages to walk you through the creation of full stack node.js project from beginning to deployment on heroku. Very concise, well explained and easy to follow.</p>
        <p className="mediaName"><span className="bookTitle">Get Programming with Node.js</span> by Jonathan Wexler</p>
        <p>Huge (500 pages+), wonderfully designed, and comprehensive book on building a Node.js project, from complete beginning, up to deploying on heroku and testing with mocha and chai.</p>
        <br />
        <h4 className="subheading">Node.js/ React:</h4>
        <p className="mediaName"><span className="bookTitle">Modern Full-Stack Development Using TypeScript, React, Node.js, Webpack and Docker</span> by Frank Zammetti</p>
        <p>A great technical manual on all the technologies it covers, but what makes it stand out is how witty and charming a writer Frank Zammetti is. In between the technical instruction he fills the book with entertaining and illuminating industry-insider anecdotes on the history of web development to explain why and how technologies like React, TypeScript, Webpack and Docker came about.</p>
        <br />
        <h4 className="subheading">React:</h4>
        <p className="mediaName"><span className="bookTitle">Beginning React with Hooks</span> by Greg Lim</p>
        <p>This book does for React what Greg Lim's Node book does for Node. Simply, no one writes in a plainer, and more no-nonsense and easy-to-understand style. Like with his Node book, Greg starts with a simple 'hello world' type project and keeps adding to it, making it more and more complex, until without even realising it you have covered loads of topics, and gained a solid grounding in the technology.</p>
        <br />
        <h4 className="subheading">Biography/ general:</h4>
        <p className="mediaName"><span className="bookTitle">Code: The Hidden Language of Computer Hardware and Software</span> by Charles Petzold</p>
        <p>Author Charles Petzold has an amazing ability to make difficult concepts easy to understand. This book covers the history of computer science and shows how things like braile, morse code, telegraphs and relays helped pave the way for the modern computer.</p>
        <p className="mediaName"><span className="bookTitle">The Innovators</span> by Walter Isaacson</p>
        <p>Extremely entertaining and unputdownable book focusing on all the eccentric genius' that propelled computer science forward, from Charles Babbage and Ada, Countess of Lovelace in the early 19th century, to the usual suspects of Bill Gates and Steve Jobs in the late 20th century. Featuring thrilling accounts of all the biggest discoveries and breakthroughs in computer science such as the invention of the transistor, the microchip, video games, the home computer etc. It covers much of the same ground as another book in this list - Code by Charles Petzold - but the Innovators is much more gossipy and less technical.</p>
        <br />
        <p />
        <br />  
      </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resources;