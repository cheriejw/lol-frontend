import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Hello, Hello2} from './app/hello';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
    <Route path="/two" component={Hello2}/>
  </Router>,
  document.getElementById('root')
);
