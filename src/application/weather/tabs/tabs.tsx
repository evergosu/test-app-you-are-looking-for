import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Tab = styled(Link)`
  cursor: pointer;
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 10em;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: ${p => p.theme.colors.blackIsh};

  &.active {
    color: #fff;
    background-color: ${p => p.theme.colors.darkGrey};
  }

  @media (min-width: ${p => p.theme.media.phone}) {
    font-size: 2em;
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
