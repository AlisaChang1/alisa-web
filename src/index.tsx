import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename='/alisa-web'>
//       <Route path={'/home'} component={NavBar}></Route>
//       <Switch>
//         <Route path='/home' component={HomeComponents}></Route>
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
