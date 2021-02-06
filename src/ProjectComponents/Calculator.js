import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Calculator extends React.Component {
 
  render() {
    return (
      
        <div className="project">
        <h3 className="subheading">Calculator</h3>
        <br />
        <div className="projectButtons">
          <button
            className="projectButton"
            onClick={() =>
              window.open(
                "https://stephendoyle10.github.io/queerculator.github.io/"
              )
            }
          >
            Visit Calculator
          </button>
          <button
            className="projectButton"
            onClick={() =>
              window.open(
                "https://github.com/StephenDoyle10/queerculator.github.io"
              )
            }
          >
            View Code
          </button>
        </div>
        <br />
        <br />
        <p>
          This calculator is my first ever coding project, and I used it
          as a opportunity to put into pratice some CSS ideas picked up
          in the Codecademy CSS course, and to try out integrating
          JavaScript with HTML.
          <br />
        </p>
      </div>
              
    );
  }
}

export default Calculator;