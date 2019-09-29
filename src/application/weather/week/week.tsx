import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  color: #232323;
  background-color: #f6fbfe;
`;

const Week: React.FC = () => {
  return (
    <Wrapper>
      <div>Work in progress</div>
    </Wrapper>
  );
};

export default Week;
