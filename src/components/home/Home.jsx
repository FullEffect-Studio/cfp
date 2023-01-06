import React from 'react'
import HomeBanner from './HomeBanner'
import ItemsGroup from './ItemsGroup'
import NaviBar from './Navibar'
import ReportAProblem from './ReportAProblem'


const Home = () => {
  return (
    <div>
        <NaviBar />
        <HomeBanner /> 
        <ReportAProblem /> 
        <ItemsGroup />

    </div>
  )
}

export default Home