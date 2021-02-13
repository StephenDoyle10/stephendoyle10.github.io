import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Boarpp() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        This application demonstrates use and proficiency in the following
        languages, tools, frameworks, runtime environments, database programmes,
        skills etc:
        <br />
        <br />
        HTML
        <br />
        CSS
        <br />
        JavaScript
        <br />
        Modals
        <br />
        Bootstrap
        <br />
        Node.js
        <br />
        NPM
        <br />
        Express
        <br />
        Template Engine (Embedded JavaScript/EJS)
        <br />
        MongoDB
        <br />
        Mongoose
        <br />
        User registration/ password encryption (using bcrypt)
        <br />
        MVC architecture
        <br />
        Summernote WYSIWYG text editor for formatting posts
        <br />
        <br />
        The application includes the following features:
        <br />
        -ability to register an account, and sign in and out
        <br />
        -a feed page which lists all previous posts (sorted by most recent)
        <br />
        -ability to create a new blog post, with option to upload a picture,
        which then gets added to the feed
        <br />
        -a search function in which a user can search previous posts for a
        keyword
      </p>
    </div>
  );
  const linkName = readMore ? "[read less]" : "[read more]";
  return (
    <div className="project">
      <h3 className="subheading">Boarpp</h3>
      <br />
      <div className="projectButtons">
        <button
          className="projectButton"
          onClick={() => window.open("https://boarpp.herokuapp.com")}
        >
          Visit Boarpp
        </button>
        <button
          className="projectButton"
          onClick={() =>
            window.open("https://github.com/StephenDoyle10/boarpp")
          }
        >
          View Code
        </button>
      </div>
      <br />
      <br />
      <div className="projectText">
        <p>
          'Boarpp' is a full-stack web app built with Node.js, Express and
          MongoDB. It is a blogging service for the board game community, in
          which users can create posts about board games they have played.
          <div
            className="articleLink"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <p>{linkName}</p>
          </div>
          {readMore && extraContent}
        </p>
      </div>
    </div>
  );
}

export default Boarpp;

