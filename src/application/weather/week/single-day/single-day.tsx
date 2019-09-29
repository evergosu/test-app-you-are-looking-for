import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  color: #232323;
`;

const Dates = styled.div`
  text-align: left;
  flex-grow: 1;

  p {
    margin: 0;
  }

  p:nth-child(2) {
    font-size: 12px;
  }
`;

const Weather = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 2em;
  }
`;

type Props = {
  date: string;
  minTemp: number;
  maxTemp: number;
  weatherState: string;
};

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const SingleDay: React.FC<Props> = ({
  weatherState,
  minTemp,
  maxTemp,
  date,
}) => {
  const dayOfWeek = DAY_NAMES[new Date(date).getDay()];

  return (
    <Wrapper>
      <Dates>
        <p>{dayOfWeek}</p>
        <p>{date}</p>
      </Dates>
      <Weather>
        <span>
          {`${maxTemp}\u00b0`}/{`${minTemp}\u00b0`}
        </span>
        <img
          alt="icon"
          width="30px"
          height="30px"
          src={`https://www.metaweather.com/static/img/weather/${weatherState}.svg`}
        />
      </Weather>
    </Wrapper>
  );
};

export default SingleDay;
