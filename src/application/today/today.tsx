import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fetchLocationInfo from '../../api/fetch-location-info';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  font-size: 100px;
  background-color: #194f2b;
`;

const Today: React.FC = () => {
  const [isLoading, hasError, cityName, cityId] = useLocationInfo('moscow');

  if (isLoading) {
    return <div>This is loader</div>;
  }

  if (hasError) {
    return <div>Oops, there is an error</div>;
  }

  return (
    <Wrapper>
      <div>Today</div>
      <div>Icon</div>
      <div>Temperature</div>
      <div>Time</div>
      <div>{`${cityName} (${cityId})`}</div>
    </Wrapper>
  );
};

type LocationInfo = [boolean, boolean, string?, number?];

function useLocationInfo(location: string): LocationInfo {
  const [id, setId] = useState<number>();

  const [name, setName] = useState<string>();

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const [{ title, woeid }] = await fetchLocationInfo(location);

        setId(woeid);

        setName(title);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [location]);

  return [isLoading, hasError, name, id];
}

export default Today;
