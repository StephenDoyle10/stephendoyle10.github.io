import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


class GitCommands extends React.Component {

  render() {
    const articleName = "Popular Git Commands";
    return (
      
        <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="bodyContent">
              <p><Link as={Link} className="plainP" to="/blog">Blogpost</Link > &gt; {articleName}</p>
              <br/>
              <h3 className="subheading">{articleName}</h3>
              <br/>
              <p className="publishedDate">20 April 2021</p>
              <p>This article goes through some of the most popular and important Git commands.</p>
              <p>First, if you working with team, often code will be stored remotely so that all team members can access it. A popular place to store such code is GitHub, althought there are many other options. At some point you may have to get the project code from the remote repo (eg code on GitHub) and onto your local machine (eg on your laptop). To do this, you must clone the project code from the remote. This can be done with the following command:</p>
              <pre><code>git clone &lt;URL of repo&gt;</code></pre>
              <p>This will create a folder in the working directory that contains the code in the repo. That folder will be given a default name, although you can give it your own name if you clone in the following way:</p>
              <pre><code>git clone &lt;URL of repo&gt; &lt;name you want to give project&gt;</code></pre>
              <p>You also have the option of cloning just a particular branch of the project:</p>
              <pre><code>git clone --single-branch --branch &lt;branch name&gt; &lt;URL of repo&gt; &lt;name you want to give project&gt;</code></pre>
              <hr/>
              <p>So that's how we clone a remote repo onto our local device. We can also do the opposite, in other words, push code from our local device to a remote repo. First you have to make sure your project is a git repository. If it is a clone, then it is already a git repo. Alternatively, if you have started a code project from scratch on your local device, then it is most probably not a git repository yet. You can make it into a git repo with (make sure terminal is open in the relevant directory):

              
              </p>
              <pre><code>git init</code></pre>
              <p>Git init command creates/ initializes a new Git project/ repository. It creates a .git folder with all the tools and data necessary to maintain versions.</p>
              <p>If you want to push this git repo to a remote repository (for example, one saved on GitHub), the repo must have a remote. There may already be a remote connected to the repo (for example, if the repo is a clone). You can check if there is already a remote with:</p>
              <pre><code>git remote -v</code></pre>
              <p>If there is a remote connected to the repo, but you wish to change it to a different remote:</p>
              <pre><code>git remote set-url origin &lt;URL of new remote&gt;</code></pre>
              <p>If there is no remote and you wish to add one:</p>
              <pre><code>git remote add origin &lt;URL of remote&gt;</code></pre>
              <p>A note about 'origin': 'origin' is a shorthand name for the remote repo, like a variable name. It is used instead of the repo's URL, so referencing is much easier. And actually you can use any name to reference the URL, not just 'origin', however using the name 'origin' is the popular convention.</p>
              <hr/>
              <h5>Branches</h5>
              <p>When working with Git and GitHub you will come across times when you want to push to different branches, rather than the master branch. For example, you might want to do this if the code is experimental and you want to test it more thoroughly before pushing it to the master branch.</p>
              <p>By default, your project will be working on the master branch. You can check by typing:
              </p>
              <pre><code>git branch</code></pre>
              <p>or</p>
              <pre><code>git branch --list</code></pre>
              <p>This lists all the branches in your repo. Also, the branch you are currently in will be highlighted. If you want to switch to a different branch:</p>
              <pre><code>git checkout &lt;name of branch you want to switch to&gt;</code></pre>
              <p>If you want to create a new branch and switch to that new branch:</p>
              <pre><code>git checkout -b &lt;name of branch you want to create and switch to&gt;</code></pre>
              <p>If you just want to create a new branch but not switch to it:</p>
              <pre><code>git branch &lt;name of branch you want to create&gt;</code></pre>
              <p>If you want to delete a branch locally:</p>
              <pre><code>git branch -d &lt;name of branch you want to delete&gt;</code></pre>
              <hr/>
              <h5>add, commit and push</h5>
              <p>add, commit and push are the like the Git holy trinity, for when you are happy with your code on your local device and want to push it to the remote repo. First, you have to add the necessary files to the staging area. If you wish to add a particular file to the staging area:</p>
              <pre><code>git add &lt;file name&gt;</code></pre>
              <p>or, to add a particular folder to the staging area:</p>
              <pre><code>git add &lt;folder name&gt;</code></pre>
              <p>or, to add the entire project to the staging area:</p>
              <pre><code>git add .</code></pre>
              <p>Now we can record changes with:</p>
              <pre><code>git commit -m "commit message"</code></pre>
              <p>Finally, we can push these changes to the remote repo with:</p>
              <pre><code>git push origin &lt;branch name&gt;</code></pre>
              <p>So if you have used these commands to push code from your computer to a GitHub repo, you can now go online to GitHub, and you will see that the relevant repo there has been updated.</p>

            </div>
          </Col>
        </Row>
      </Container>
         
    );
  }
}

export default GitCommands;