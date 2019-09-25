import React from 'react';
import styled from 'styled-components';

import useLocationInfo from '../../hooks/use-location-info';

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
  const [isLoading, hasError, cityName = 'Moscow'] = useLocationInfo('moscow');

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
      <div>{cityName}</div>
    </Wrapper>
  );
};

export default Today;
