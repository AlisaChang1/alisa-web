import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeComponents from './Home/index';
import NavBar from './NavBar/index';
import ResumeComponents from './Resume/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        path={['/alisa-web', '/alisa-web/resume']}
        component={NavBar}
      ></Route>
      <Switch>
        <Route path='/alisa-web' component={HomeComponents}></Route>
        <Route path='/alisa-web/resume' component={ResumeComponents}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
