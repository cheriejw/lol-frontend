import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main, UserProfile} from './views';

import './index.scss';

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
      <Route path="/two" component={UserProfile}/>
    </Router>
  </div>,
  document.getElementById('root')
);
