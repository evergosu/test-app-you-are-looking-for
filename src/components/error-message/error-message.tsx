import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  color: red;
  font-size: 30px;
  text-align: center;
  position: absolute;
  transform: translate(-50%);
`;

const ErrorMessage: React.FC = () => {
  return <Message>Oops, there is an error</Message>;
};

export default ErrorMessage;
