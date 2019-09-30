import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';
import styled from 'styled-components';

import Tabs from './tabs/tabs';
import Week from './week/week';
import Today from './today/today';
import Spinner from '../../components/spinner/spinner';
import ErrorMessage from '../../components/error-message/error-message';

import useLocationInfo from '../../hooks/use-location-info';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Weather: React.FC = () => {
  const [isLoading, hasError, cityName = 'Moscow', cityId] = useLocationInfo(
    'moscow',
  );

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <Wrapper>
      <Router>
        <Tabs />
        <Spinner isLoading={isLoading}>
          <Switch>
            <Route path="/today">
              {cityId && <Today cityId={cityId} cityName={cityName} />}
            </Route>
            <Route path="/week">{cityId && <Week cityId={cityId} />}</Route>
            <Redirect to="/today" />
          </Switch>
        </Spinner>
      </Router>
    </Wrapper>
  );
};

export default Weather;
