import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollIntoView from './ScrollIntoView';


//The purpose of ScrollIntoView is to fix a routing bug in which when you click on a new page, the new page loads but will not automatically start the new page at the top. For example, if you have been on 'resources' page, and are currently viewing the bottom of the page, if you click on 'projects' page, that will reload near the bottom of the page. With ScrollIntoView component, new page auto loads at top. See  for more info.

ReactDOM.render(
  <HashRouter>
    <ScrollIntoView>
    <App />
    </ScrollIntoView>
    
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
