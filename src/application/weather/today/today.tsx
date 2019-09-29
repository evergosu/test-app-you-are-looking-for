import React from 'react';
import styled from 'styled-components';

import Spinner from '../../../components/spinner/spinner';
import ErrorMessage from '../../../components/error-message/error-message';

import useTodayWeather from '../../../hooks/use-today-weather';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: #232323;
`;

const Temperature = styled.div`
  font-size: 30px;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  cityId: number;
  cityName: string;
};

const Today: React.FC<Props> = ({ cityName, cityId }) => {
  const [
    isLoading,
    hasError,
    weatherState = 'c',
    temperature = 0,
    date,
  ] = useTodayWeather(cityId);

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <Spinner isLoading={isLoading}>
      <Wrapper>
        <img
          width="150px"
          height="150px"
          alt="Current weather icon"
          src={`https://www.metaweather.com/static/img/weather/${weatherState}.svg`}
        />
        <Temperature>{`${temperature}\u00b0C`}</Temperature>
        <Location>
          <span>{date}</span>
          <span>{cityName}</span>
        </Location>
      </Wrapper>
    </Spinner>
  );
};

export default Today;
