import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  color: ${p => p.theme.colors.blackIsh};
`;

const Dates = styled.div`
  flex-grow: 1;
  text-align: left;
  padding-left: 2em;

  @media (min-width: ${p => p.theme.media.phone}) {
    flex-grow: 0.2;
  }

  p {
    margin: 0;
  }

  p:nth-child(2) {
    font-size: 12px;
  }
`;

const Weather = styled.div`
  display: flex;
  padding-right: 2em;
  align-items: center;

  img {
    margin-left: 2em;
  }
`;

const Image = styled.img`
  width: 2em;
  height: 2em;

  @media (min-width: ${p => p.theme.media.phone}) {
    width: 3em;
    height: 3em;
  }
`;

type Props = {
  date: string;
  minTemp: number;
  maxTemp: number;
  className?: string;
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
  className,
  minTemp,
  maxTemp,
  date,
}) => {
  const dayOfWeek = DAY_NAMES[new Date(date).getDay()];

  return (
    <Row className={className}>
      <Dates>
        <p>{dayOfWeek}</p>
        <p>{date}</p>
      </Dates>
      <Weather>
        <span>
          {`${maxTemp}\u00b0`}/{`${minTemp}\u00b0`}
        </span>
        <Image
          alt="icon"
          src={`https://www.metaweather.com/static/img/weather/${weatherState}.svg`}
        />
      </Weather>
    </Row>
  );
};

const ColoredSingleDay = styled(SingleDay)`
  background-color: ${p =>
    p.theme.weatherColors[p.weatherState] || p.theme.weatherColors.lc};
`;

export default ColoredSingleDay;
