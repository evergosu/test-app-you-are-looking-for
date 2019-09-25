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

const Week: React.FC = () => {
  return (
    <Wrapper>
      <div>Work in progress</div>
    </Wrapper>
  );
};

export default Week;
