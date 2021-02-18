import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class CheatSheet extends React.Component {
  

  render() {
    return (
      
        <div className="project">
        <h3 className="subheading">
          JavaScript String Method Cheat Sheet
        </h3>
        <br />
        <div className="projectButtons">
          <button
            className="projectButton"
            onClick={() =>
              window.open(
                "https://stephendoyle10.github.io/JS-String-Methods/"
              )
            }
          >
            Visit Cheat Sheet
          </button>
          <button
            className="projectButton"
            onClick={() =>
              window.open(
                "https://github.com/StephenDoyle10/JS-String-Methods/"
              )
            }
          >
            View Code
          </button>
        </div>
        <br />
        <br />
        <p>
          This is my first attempt at writing a HTML webpage that has
          javaScript functions. I had just completed the javaScript
          course on freecodecamp, which covered a lot of ground, but did
          not have much on how to integrate JS with HTML, so I had to
          research that myself.
          <br />
          <br />
          This programme uses HTML input form fields that takes a users
          input and stores it as a JS variable. Then an onclick event
          does something with this variable, and returns a new value on
          the webpage.
          <br />
        </p>
        <br />
      </div>
              
    );
  }
}

export default CheatSheet;