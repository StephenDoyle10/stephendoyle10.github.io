import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Resources from './Resources';
import Humour from './Humour';
import Contact from './Contact';
import DeployingReact from './ArticlesComponents/DeployingReact';
import Notes from './Notes';
import AsyncJSArticle from "./ArticlesComponents/AsnycJSArticle";
import EnginesAndRuntime from "./ArticlesComponents/EnginesAndRuntime";
import ComponentTypes from "./ArticlesComponents/ComponentTypes";
import MERNSetUp1 from "./ArticlesComponents/MERNSetUp1";
import MERNSetUp2 from "./ArticlesComponents/MERNSetUp2";
import MERNSetUp3 from "./ArticlesComponents/MERNSetUp3";
import MERNSetUp4 from "./ArticlesComponents/MERNSetUp4";
import GraphQL from "./ArticlesComponents/GraphQL";
import MernToHeroku from "./ArticlesComponents/MernToHeroku";
import { Route, Switch } from 'react-router-dom';

const App=()=>{

  return(
    <div>
      <NavBar/>
      
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/humour" component={Humour} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/asyncjsarticle" component={AsyncJSArticle}/>
          <Route path="/deployingreact" component={DeployingReact}/>
          <Route path="/enginesandruntime" component={EnginesAndRuntime}/>
          <Route path="/componenttypes" component={ComponentTypes}/>
          <Route path="/mernsetup1" component={MERNSetUp1}/>
          <Route path="/mernsetup2" component={MERNSetUp2}/>
          <Route path="/mernsetup3" component={MERNSetUp3}/>
          <Route path="/mernsetup4" component={MERNSetUp4}/>
          <Route path="/graphql" component={GraphQL}/>
          <Route path="/merntoheroku" component={MernToHeroku}/>

          <Route path="/notes" component={Notes}/>


         
      </Switch>
        
    </div>
  )
}

export default App;
