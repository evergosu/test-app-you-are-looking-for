import React from 'react';
import styled from 'styled-components';

import useTodayWeather from '../../../hooks/use-today-weather';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  color: #232323;
  background-color: #f6fbfe;
`;

const Tab = styled.div`
  color: #fff;
  border-radius: 10em;
  padding: 0.25em 0.5em;
  background-color: #949ea0;
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
  const [, hasError, weatherState, temperature, date] = useTodayWeather(cityId);

  if (hasError) {
    return <div>Oops, there is an error</div>;
  }

  return (
    <Wrapper>
      <Tab>Today</Tab>
      <div>{weatherState}</div>
      <Temperature>{`${temperature || '?'} \u00b0C`}</Temperature>
      <Location>
        <span>{date}</span>
        <span>
          {cityName} {cityId}
        </span>
      </Location>
    </Wrapper>
  );
};

export default Today;
