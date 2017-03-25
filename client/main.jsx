import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

import StartForm from '../imports/logic/StartForm';
import TicketsForm from '../imports/logic/TicketsForm';
import Contact from '../imports/logic/Contact';

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={browserHistory}>
      <div>
        <Route path="/" component={StartForm} />
        <Route path="/tickets" component={TicketsForm} />
        <Route path="/contact" component={Contact} />
      </div>
  </Router>
);

Meteor.startup(() => {
    render(routes, document.getElementById('app'));
});