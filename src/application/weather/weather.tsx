import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';

import Today from './today/today';
import Week from './week/week';

const Weather: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/today" />
        <Route path="/today">
          <Today />
        </Route>
        <Route path="/week">
          <Week />
        </Route>
      </Switch>
    </Router>
  );
};

export default Weather;
