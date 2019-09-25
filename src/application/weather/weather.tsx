import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';

import Week from './week/week';
import Today from './today/today';

import useLocationInfo from '../../hooks/use-location-info';

const Weather: React.FC = () => {
  const [isLoading, hasError, cityName = 'Moscow', cityId] = useLocationInfo(
    'moscow',
  );

  if (isLoading || !cityId) {
    return <div>Trying to find your city</div>;
  }

  if (hasError) {
    return <div>Oops, there is an error</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/today">
          <Today cityName={cityName} cityId={cityId} />
        </Route>
        <Route path="/week">
          <Week />
        </Route>
        <Redirect to="/today" />
      </Switch>
    </Router>
  );
};

export default Weather;
