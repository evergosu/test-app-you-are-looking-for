import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Tab = styled(Link)`
  color: #232323;
  border-radius: 10em;
  padding: 0.25em 0.5em;
  background-color: #f6fbfe;
  text-decoration: none;

  &.active {
    color: #fff;
    background-color: #949ea0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Tabs: React.FC = () => {
  const { pathname } = useLocation();

  const todayPath = '/today';

  const weekPath = '/week';

  return (
    <Wrapper>
      <Tab
        to={todayPath}
        className={pathname.includes(todayPath) ? 'active' : ''}
      >
        Today
      </Tab>
      <Tab
        to={weekPath}
        className={pathname.includes(weekPath) ? 'active' : ''}
      >
        Week
      </Tab>
    </Wrapper>
  );
};

export default Tabs;
