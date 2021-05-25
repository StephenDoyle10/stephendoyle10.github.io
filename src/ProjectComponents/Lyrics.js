import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Lyrics extends React.Component{
 
    render() {
      return (
        
          <div className="project">
          <h3 className="subheading">Lyrics to Live By</h3>
          <br />
          <div className="projectButtons">
            <button
              className="projectButton"
              onClick={() =>
                window.open(
                  "http://www.lyricstoliveby.uk"
                )
              }
            >
              Visit Lyrics to Live By
            </button>
            <button
              className="projectButton"
              onClick={() =>
                window.open(
                  "https://github.com/StephenDoyle10/lyrics"
                )
              }
            >
              View Code
            </button>
          </div>
          <br />
          <br />
          <p>
          This project builds off the MERN stack <i>Guestbook</i> web app (see below) I previously built. The big advancement here compared to the <i>Guestbook</i>, is that <i>Lyrics to Live By</i> has user authentication and authorization, which of course is vital for any full stack web app that wishes to include user content. In this app, users sign in with their gmail account; thus this app uses Google APIs. For authorization, it uses JSON web tokens.
          <br/>
          <br/>
          So what can users on the app actually do? Well, we all know how much certain people love posting pictures of their food online. <i>Lyrics to Live By</i> is the music equivalent to that: I believe music lovers will love posting and sharing lyric snippets online, the same way food lovers love posting pictures of food. What are you waiting for? Visit the site, and add your favourite lyrics for the world to see!
          </p>
        </div>
                
      );
    }
  }
export default Lyrics;