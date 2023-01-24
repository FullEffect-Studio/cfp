import React from 'react'
import HomeBanner from './HomeBanner'
import ItemsGroup from './ItemsGroup'
import NaviBar from './Navibar'
import ReportAProblem from './ReportAProblem'
import styled from 'styled-components'

const StyledHome = styled.main`
  width: 100vw;
  height: max-content;
`;

const Home = () => {
  return (
    <StyledHome>
        <NaviBar />
        <HomeBanner /> 
        <ReportAProblem /> 
        <ItemsGroup />

    </StyledHome>
  )
}

export default Home