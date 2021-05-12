import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import meme1 from "./images/memes/MachineLearning.jpeg";
import meme2 from "./images/memes/EwWelJGWEAAR56k.jpeg";
import meme3 from "./images/memes/mountain.png";
import meme4 from "./images/memes/newJob.png";
import meme5 from "./images/memes/stackOFCopyPaste.jpeg";

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent" id="contact">
              <h2 className="subheading">Humour</h2>
              <br />
              <p>Everyone knows the main reason to get into programming is for the memes. Here are some of my favourites. I did not create ANY of them, and unfortuantely due to the nature of memes it is difficult to find who the original creator of each meme is. However, under each meme, I do link to the source where I first found it, although that source may not be the original creator. Anyway, enjoy!</p>
              
              
              <img className="memes" src={meme1} alt="Machine Learning meme" />
              <div className="sourceContainer">
                <a
                  className="articleLink"
                  href="https://twitter.com/mytrashcode/status/1362854479566168067"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Source
                </a>
              </div>
              <img className="memes" src={meme2} alt="Stack Overflow meme" />
              <div className="sourceContainer">
                <a
                  className="articleLink"
                  href="https://twitter.com/mytrashcode/status/1370676024787230720"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Source
                </a>
              </div>
              <img className="memes" src={meme3} alt="JS Frameworks Pandemonium" />
              <div className="sourceContainer">
                <a
                  className="articleLink"
                  href="https://www.reddit.com/r/ProgrammerHumor/comments/bx0czx/entering_the_programming_via_frontend_way/?utm_source=amp&utm_medium=&utm_content=comments_view_all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Source
                </a>
              </div>
              <img className="memes" src={meme4} alt="Time for a new job" />
              <div className="sourceContainer">
                <a
                  className="articleLink"
                  href="https://old.reddit.com/r/ProgrammerHumor/comments/mnsel7/well_bout_time_for_me_to_be_hittin_the_ol_dusty/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Source
                </a>
              </div>
              <img className="memes" src={meme5} alt="Stack Overflow meme" />
              <div className="sourceContainer">
                <a
                  className="articleLink"
                  href="https://old.reddit.com/r/ProgrammerHumor/comments/n5gc6c/visualizing_the_codes_i_write/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Source
                </a>
              </div>
              <br/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;