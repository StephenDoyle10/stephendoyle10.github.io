import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Articles from './Articles';
import Resources from './Resources';
import Contact from './Contact';
import DeployingReact from './ArticlesComponents/DeployingReact';
import Notes from './Notes';
import AsyncJSArticle from "./ArticlesComponents/AsnycJSArticle";
import EnginesAndRuntime from "./ArticlesComponents/EnginesAndRuntime";
import { Route, Switch } from 'react-router-dom';

const App=()=>{

  return(
    <div>
      <NavBar/>
      
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/asyncjsarticle" component={AsyncJSArticle}/>
          <Route path="/deployingreact" component={DeployingReact}/>
          <Route path="/enginesandruntime" component={EnginesAndRuntime}/>
          <Route path="/notes" component={Notes}/>


         
      </Switch>
        
    </div>
  )
}

export default App;
