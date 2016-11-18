import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/app';

/*
  Import root style sheet
*/
import './styles/styles.less';

/*
  Root node to render to
*/
const MOUNT_NODE = document.getElementById('root');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  MOUNT_NODE,
);
