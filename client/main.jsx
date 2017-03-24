import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

import StartForm from '../imports/logic/StartForm';
import TicketsForm from '../imports/logic/TicketsForm';

const routes = (
  <Router history={createBrowserHistory}>
      <Route path="/" component={StartForm}/>
      <Route path="/tickets" component={TicketsForm}/>
  </Router>
);

Meteor.startup(() => {
    render(routes, document.getElementById('app'));
});