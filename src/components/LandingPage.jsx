import React from "react";
import styled from "styled-components";
import Home from "./home/Home";

const LandingPageStyle = styled.main`
  width: 100vw;
  height: 100vh;
`;

const LandingPage = () => {
  return (
    <LandingPageStyle>
      <Home />
    </LandingPageStyle>
  );
};

export default LandingPage;
