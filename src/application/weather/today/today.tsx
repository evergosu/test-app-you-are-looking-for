import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fetchTodayWeather from '../../../api/fetch-today-weather';

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

type Props = {
  cityId: number;
  cityName: string;
};

const Today: React.FC<Props> = ({ cityName, cityId }) => {
  const [
    isLoading,
    hasError,
    weatherState,
    temperature,
    date,
  ] = useTodayWeather(cityId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Oops, there is an error</div>;
  }

  return (
    <Wrapper>
      <div>Today</div>
      <div>{weatherState}</div>
      <div>{`${temperature || '?'}\u00b0C`}</div>
      <div>{date}</div>
      <div>
        {cityName} {cityId}
      </div>
    </Wrapper>
  );
};

type LocationWeather = [boolean, boolean, string?, number?, string?];

function useTodayWeather(locationId: number): LocationWeather {
  const [date, setDate] = useState<string>();

  const [temperature, setTemperature] = useState<number>();

  const [weatherState, setWeatherState] = useState<string>();

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const [w, t, d] = await fetchTodayWeather(locationId);

        setDate(d);

        setTemperature(t);

        setWeatherState(w);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [locationId]);

  return [isLoading, hasError, weatherState, temperature, date];
}

export default Today;
