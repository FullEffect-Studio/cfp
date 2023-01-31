import React from "react";
import styled from "styled-components";
import Home from "./home/Home";
import PageFooter from "./PageFooter";

const LandingPageStyle = styled.main`
  width: 100vw;
  height: max-content;
  background: black;
  
`;

const LandingPage = () => {
  return (
    <LandingPageStyle>
      <Home />
      <PageFooter />
    </LandingPageStyle>
  );
};

export default LandingPage;
