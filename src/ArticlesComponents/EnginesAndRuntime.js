import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class EnginesAndRuntime extends React.Component {
  

  render() {
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
        <p><Link as={Link} className="plainP" to="/articles">Articles</Link > > Engines and Runtime Environments</p>
        <br/>
        <h3 className="subheading">Engines and Runtime Environments</h3>
        <br/>
        <p className="publishedDate">20 Jan 2021</p>
        <p>A runtime engine is a program or interpreter that reads code, translates it into machine code, and executes it. It takes human-readable code (ie high level code) such as JavaScript, and converts it to low-level machine code. There are numerous engines for JavaScript. For example, Google Chrome has V8, while Firefox has Spider-Monkey. These engines are a key feature of a runtime environment, which is part of the web browser.</p>
        <p>An engine is necessary to execute JavaScript code, and as JavaScript is the frontend language of web development, this is why every browser has a JavaScript runtime environment (which includes an engine). Google Chrome's JavaScript engine is one of the more popular engines. It is called V8, it is written in C++, and is open source. </p>
        {/* 
        Difference between compiled and interpreted languages:
        The difference between a compiler and an interpreter is similar to the difference between a human language interpreter and a human translator.

        An interpreter goes over the program line by line, translates it, runs it, and then gets the next line. That is like an interpreter that translates sentences one at a time as they're said.

        A compiler takes the whole program, translates it all and then outputs a machine-readable code. That is like sending your article to be translated and getting it back all in French.

        Each method has advantages and disadvantages. If the code is compiled, then any computer can instantly run it without worrying about translating it making it faster, and meaning it needs to only be translated once no matter how many times it is run. Also the user will not have access to the original code. An interpreted program doesn't have to be saved on the computer and lines can be executed one at a time from a different medium, and can also give you accurate information regarding which line did what / had an error / etc.*/}
        <p>So why has JavaScript traditionally been only used on the frontend? As just discussed, Javascript needs a runtime environment, and an engine (which is part of that environment), to interpret and then execute JavaScript code. These runtime environments were traditionally found on browsers, and their purpose was to interpret frontend code (eg JavaScript code to make websites interactive and manipulate the DOM). However, the browser's JavaScript runtime environment could not be used to interpret and execute server-side/ backend code - in web development, backend/ server side code is separate and runs independently of the browser. Node's innovation was to create it's own runtime environment, using V8 as the engine, so that JavaScript code could be executed on the server side. In addition to the V8 engine, the Node runtime environment also includes modules and APIs that give extra functionality to JavaScript code.
        </p>
        
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        
        
        </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default EnginesAndRuntime;