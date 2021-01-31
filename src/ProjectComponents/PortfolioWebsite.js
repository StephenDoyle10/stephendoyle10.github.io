import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PortfolioWebsite extends React.Component {
  

  render() {
    return (
      
        <div className="project">
        <h3 className="subheading">Personal Portfolio Website</h3>
        <br />
        <div className="projectButtons">
          <button
            className="projectButton"
            onClick={() =>
              window.open(
                "https://github.com/StephenDoyle10/stephendoyle10.github.io"
              )
            }
          >
            View Code
          </button>
        </div>
        <br />
        <br />
        <p>
          This is the website you are viewing right now! A static website, I originally created this in the conventional traditional way - with HTML and CSS (with a little help from Bootstrap and Sass). However, after learning React, one of my very first React projects was to refactor this website and build it in React. So the website as you see it now is build in React. This was a great exercise to start thinking of websites in the React way, which is a major paradigm shift from from how we traditionally view building websites. Also, this website gave me important practice in using packages such as react-router and react-bootstrap.
          <br />
        </p>
        <br />
      </div>
              
    );
  }
}

export default PortfolioWebsite;