import React from 'react';
import styled from 'styled-components';

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
  return (
    <Wrapper>
      <div>Today</div>
      <div>Icon</div>
      <div>Temperature</div>
      <div>Time</div>
      <div>Location</div>
    </Wrapper>
  );
};

export default Today;
