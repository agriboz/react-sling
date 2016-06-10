import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AddNewLink from './components/AddNewLink';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="add-new-link" component={AddNewLink} />
  </Route>
);
