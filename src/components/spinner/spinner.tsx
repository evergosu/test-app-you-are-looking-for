import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1);
  }
`;

const Spin = styled.div`
  width: 70px;
  text-align: center;
  margin: auto;

  span {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    animation: ${bounce} 1.4s infinite ease-in-out both;
  }

  span:first-child {
    animation-delay: -0.32s;
  }

  span:second-child {
    animation-delay: -0.16s;
  }
`;

type Props = {
  isLoading: boolean;
  children: React.ReactElement;
};

const Spinner: React.FC<Props> = ({ isLoading, children }) => {
  return isLoading ? (
    <Spin>
      <span />
      <span />
      <span />
    </Spin>
  ) : (
    children
  );
};

export default Spinner;
