import React from 'react';
import styled from 'styled-components';

import SingleDay from './single-day/single-day';
import Spinner from '../../../components/spinner/spinner';
import ErrorMessage from '../../../components/error-message/error-message';

import useWeekWeather from '../../../hooks/use-week-weather';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.blackIsh};

  > div {
    flex: 1;
  }
`;

type Props = {
  cityId: number;
};

const Week: React.FC<Props> = ({ cityId }) => {
  const [isLoading, hasError, data] = useWeekWeather(cityId);

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <Spinner isLoading={isLoading}>
      <Wrapper>
        {data &&
          data.map(({ minTemp, maxTemp, weatherState, date }) => (
            <SingleDay
              key={date}
              date={date}
              minTemp={minTemp}
              maxTemp={maxTemp}
              weatherState={weatherState}
            />
          ))}
      </Wrapper>
    </Spinner>
  );
};

export default Week;
