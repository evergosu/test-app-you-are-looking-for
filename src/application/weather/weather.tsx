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

import useLocationInfo from '../../hooks/use-location-info';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f6fbfe;
`;

const Weather: React.FC = () => {
  const [isLoading, hasError, cityName = 'Moscow', cityId] = useLocationInfo(
    'moscow',
  );

  if (hasError) {
    return <div>Oops, there is an error</div>;
  }

  return (
    <Wrapper>
      <Router>
        <Tabs />
        <Spinner isLoading={isLoading}>
          <Switch>
            <Route path="/today">
              {cityId && <Today cityName={cityName} cityId={cityId} />}
            </Route>
            <Route path="/week">
              <Week />
            </Route>
            <Redirect to="/today" />
          </Switch>
        </Spinner>
      </Router>
    </Wrapper>
  );
};

export default Weather;
