import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: url("public/images/hero_bg.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
`
const SocialWorkerHeader = () => {
  return (
    <div style={{"bacground": "url()"}}>
        <div className="hero"></div>        
    </div>
  )
}

export default SocialWorkerHeader