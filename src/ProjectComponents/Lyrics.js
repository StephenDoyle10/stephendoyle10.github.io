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
              Visit Website
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
          This project is a full-stack web app built using the MERN stack (MongoDB, Express, React and Node.js). The concept is simple: users can sign in (via their gmail account) and create and share posts featuring music lyrics that they are inspired by. The app features full CRUD capabilities - users can Create, Update and Delete their own posts, and read posts of others.<i>Lyrics to Live By</i> has user authentication and authorization, which of course is vital for any full stack web app that wishes to include user-created content. In this app, users sign in with their gmail account; thus this app uses Google APIs. For authorization, it uses JSON web tokens.
          <br/>
          <br/>
          <span className="bold">Technologies used:</span>
          <br />
        <br />
        HTML
        <br />
        CSS
        <br />
        JavaScript
        <br />
        Bootstrap
        <br/>
        MongoDB
        <br />
        Express
        <br />
        React
        <br />
        Node.js
        <br />
        NPM
        <br />
        User authentication using gmail/ Google APIs
        <br/>
        User authorization using JSON web tokens
        <br />
          </p>
        </div>
                
      );
    }
  }
export default Lyrics;