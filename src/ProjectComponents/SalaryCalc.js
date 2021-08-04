import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SalaryCalc() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        1. the user's annual pay after all tax deductions, 2. the user's monthly pay after all tax deductions, 3. how much the user will pay in income tax in the year, 4. how much the user will pay in national insurance contributions in the year.
        <br />
        <br />
        I felt that UK tax rules were sufficiently complex enough that this would be a good demonstration of my algorithm writing ability.
        <br />
        <br />
        The algorithm had to account for both income tax and national insurance contributions.
        <br />
        <br />
        Regarding income tax, the algorithm had to account for the following: 1. employees pay 0% on earnings up to £12,500, 2. employees then pay 20% on anything they earn between £12,501 and £50,000, 3. they pay 40% Income Tax on earnings between £50,001 to £150,000, 4. they pay 45% on earnings over £150,001
        <br />
        <br />
        Regarding National Insurance contributions, the algorithm had to account for the following: 1. employees only start to pay National Insurance contributions if they earn more than £183 a week, 2. they pay 12% of their earnings above this limit and up to £962 a week, 3. the rate drops to 2% of their earnings over £962 a week.
        <br />
        <br />
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
        <br />
        Testing with Mocha
        <br />
        TypeScript
        <br />
        NPM
        <br />
      </p>
    </div>
  );
  const linkName = readMore ? "[read less]" : "[read more]";
  return (
    <div className="project">
      <h3 className="subheading">UK Salary Calculator</h3>
      <br />
      <div className="projectButtons">
        <button
          className="projectButton"
          onClick={() =>
            window.open(
              "https://stephendoyle10.github.io/UK-Salary-Calculator/"
            )
          }
        >
          Visit Website
        </button>
        <button
          className="projectButton"
          onClick={() =>
            window.open(
              "https://github.com/StephenDoyle10/UK-Salary-Calculator/"
            )
          }
        >
          View Code
        </button>
      </div>
      <br />
      <br />
      <p>
        This project uses an algorithm that takes a user's annual gross salary
        as an input, and outputs:
      </p>
      <div
        className="articleLink"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <p>{linkName}</p>
      </div>
      {readMore && extraContent}
    </div>
  );
}

export default SalaryCalc;

