import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Gist from "react-gist";


class GraphQL extends React.Component {

  render() {
    const articleName = "GraphQL";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p><Link as={Link} className="plainP" to="/blog">Blogpost</Link > &gt; {articleName}</p>
              <br/>
              <h3 className="subheading">{articleName}</h3>
              <br/>
              <p className="publishedDate">22 March 2021</p>
              <h4>REST APIs vs GraphQL</h4>
              <p>GraphQL is an alternative to RESTful APIs that has been growing in popularity in recent years. So why has GraphQL been getting so popular? This largely has to do with the gains in efficiency that GraphQL grants your project, compared to REST. The problem with REST API calls is that they often result in overfetching and underfetching. Let's imagine you are using REST APIs and that you need to make an API call to retrieve a particular user's first name, second name, and home town from a database. However, the API may be set up so that all calls return an object that includes not just the user's first name, second name, and home town, but also their age, weight, height, marital status and lots of other details that you have no interest in. You have no choice but to recieve this object that contains all this data that you do not need. This is called overfetching. Now let's say that in addition to finding out the first name, second name, and home town of a particular user, you also wish to find out the population of that home town. Town information is kept separately from user information and accessed from a different endpoint, so to get that information you will have to call another endpoint - the call to the first endpoint does not return all the information you require. This is called underfetching.</p>
              <p>GraphQL is different, as when you make a GraphQL API call you can declare exactly what information you require, and that is the exact information that will be returned to you. Also, all information is accessed from a single endpoint (so, to continue our example, user information as well as town information would be accessed from the same endpoint, and thus only require a single http request) whereas REST APIs usually utilise multiple endpoints (which means that multiple API calls are often required to get information). There is an amazing 4-minute illustrated youtube video that explains all this very well, and that you can watch <a
                  href="https://www.youtube.com/watch?v=oPZoNjyTW3w"
                  className="articleLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>.</p>
              <p>So let's look at the core ingredients that are needed in your project code to get GraphQL up and running.</p>
              <h4>Schema</h4>
              <p>Firstly there is the schema, which describes the shape of the data graph, and also specifies exactly which queries and mutations are available to execute against the data graph. Similar to strongly typed langages (and thus dissimilar to JavaScript), the exact type (eg number, string, boolean etc) that all arguments and returned values will take are defined. One option is to put this schema in a file of its own, called 'schema.graphql', or you can store it as a variable in your JavaScript code. </p>
              <p>The most important type definitions are always the queries and the mutations (which are called top level decalrations). The queries define how data can be read, while the mutations define how data can be created, updated or deleted. This example shows the schema for a simple guestbook app in which people can see messages other people have left, and also create, update and delete messages of their own.</p>
              <Gist id="210584e06939b6d3deffd8883cd2cf0d" />
              <h4>Resolvers</h4>
              <p>Next, there are resolvers. These are functions that provide the instructions for what exactly a GraphQL operation does when it is called. For example, in the following code snippet, there is an operation to create a new greeting message, and the resolver function has a method that adds that message to the data/ list of existing messages:</p>
              <Gist id="b02b2690bd340d4c5746e57ae73a2bbb" />
              <h4>Server</h4>
              <p>With the schema and resolvers set up, we just have to provide this information to the server when we intialise it. There are a number of GraphQL server options available, but my preference is to integrate Apollo Server (one of the most popular GraphQL servers) with Express (a Node.js web application framework), and that's the example we will use here: </p>
              <Gist id="935316f00e724b85fd5e010f0e6dc76d" />
              <p>Note in this code snippet when we create a new instance of ApolloServer, we must pass two properties into it: typeDefs (short for type definitions), which takes our schema as a property value (in this case, the schema is saved in another file called schema.graphql), and the resolvers.</p>
              <h4>Playground</h4>
              <p>At this point you can visit the URL of the server and start testing it by making queries in the Playground. Indeed, at this stage in the project, this is the only way to test the code, as so far all our code has been on the back end. But it is good to test it first in the Playground before intergrating it into the front end UI. One reason for this is that if the code works as expected in the Playground, but then fails to work in the UI, then we know the problem lies in the UI code, and not in the schema, resolvers, or API server.</p>
              <h4>Fetch API</h4>
              <p>The schema, resolvers and setting up of the Apollo server are all carried out on the API side. On the UI side, we will have a function that activates on an 'event' (for example, when the user clicks a submit button). The most important feature of this function will be the sending of a call with the fetch API.</p>
              <p>The first argument passed to our fetch method is the URL endpoint of the resource that we wish to fetch. This endpoint was established earlier in our installHandler function (see above). The second argument (said to be optional although for GraphQL and for our purposes it is essential) is an object containing custom settings that you want to apply to the request. When using fetch with GraphQL, there are three key settings we have to include here: method, headers and body.</p>
              <p>In the method setting, for the majority of times with GraphQL this will be "POST". In the body setting, we want to include a query. This will be exactly how the query was written when it was tested successfully in the playground. However, the query has to be sent as JSON or it will not work, so we put the query as an argument in a JSON.stringify() method.</p>
              <p>We also need to use the header setting, as the client has to tell the server what type of data will be sent. In this case, the media type will be JSON, so we include the headers property: &#123;'Content-Type': 'application/json'&#125;</p>
              <p>Going back to our guestbook, and specifically code for adding to the guestbook, our code on the UI side might look something like this: first here is the html which contains the necessary form and event trigger (onSubmit):</p>
              <Gist id="5270eb2ecf623ff5459043f0a4b7c239" />
              <p>Then here is the function - handleSubmit() - which is called on clicking submit. This function in turn calls another function - createGreeting():</p>
              <Gist id="721b12420f1e73c9625bae52f0848d2a" />
              <p>And that's some of the basics of GraphQL!</p>
              

              
              
              
              
            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default GraphQL;
