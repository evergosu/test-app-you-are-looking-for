import React from 'react';
import styled from 'styled-components';

import Spinner from '../../../components/spinner/spinner';
import ErrorMessage from '../../../components/error-message/error-message';

import useTodayWeather from '../../../hooks/use-today-weather';

const Info = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: ${p => p.theme.colors.blackIsh};
`;

const Temperature = styled.div`
  font-size: 2em;

  @media (min-width: ${p => p.theme.media.phone}) {
    font-size: 3em;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
  margin-top: 2em;

  @media (min-width: ${p => p.theme.media.phone}) {
    width: 15em;
    height: 15em;
  }
`;

type Props = {
  cityId: number;
  cityName: string;
};

const Today: React.FC<Props> = ({ cityName, cityId }) => {
  const [
    isLoading,
    hasError,
    weatherState = 'lc',
    temperature = 0,
    date,
  ] = useTodayWeather(cityId);

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <Spinner isLoading={isLoading}>
      <Info>
        <Image
          alt="Current weather icon"
          src={`https://www.metaweather.com/static/img/weather/${weatherState}.svg`}
        />
        <Temperature>{`${temperature}\u00b0C`}</Temperature>
        <Location>
          <span>{date}</span>
          <span>{cityName}</span>
        </Location>
      </Info>
    </Spinner>
  );
};

export default Today;
