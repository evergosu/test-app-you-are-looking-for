import React from 'react';
import styled from 'styled-components';

import useTodayWeather from '../../../hooks/use-today-weather';

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

export default Today;
