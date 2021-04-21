import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class MernBasic extends React.Component{
 
    render() {
      return (
        
          <div className="project">
          <h3 className="subheading">Guestbook</h3>
          <br />
          <div className="projectButtons">
            <button
              className="projectButton"
              onClick={() =>
                window.open(
                  "https://ui-stevs-guestbook.herokuapp.com"
                )
              }
            >
              Visit Guestbook
            </button>
            <button
              className="projectButton"
              onClick={() =>
                window.open(
                  "https://github.com/StephenDoyle10/Guestbook"
                )
              }
            >
              View Code
            </button>
          </div>
          <br />
          <br />
          <p>
            For my first MERN (MongoDB, Express, React and Node.js) stack project, I wanted to keep things simple and create as minimal a project as possible, but one that still includes full CRUD capabilities: the ability for a user to create, read, update and delete data. If a user visits the project's website, they can add a greeting message (or a joke, or a favourite quote, or anything they wish), and they can also view, delete and edit messages.
            <br />
            <br/>
            This project is deliberately very bare bones and does not even contain CSS (much less bootstrap). The idea is that it contains essential code only and can serve as a template for more ambitious projects in future. Deployed on Heroku, and it uses the GraphQL approach to web APIs, rather than REST.
            
          </p>
        </div>
                
      );
    }
  }
export default MernBasic;