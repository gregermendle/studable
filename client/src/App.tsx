import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';

import 'font-awesome/less/font-awesome.less';
import './styles/styles.less';

render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
