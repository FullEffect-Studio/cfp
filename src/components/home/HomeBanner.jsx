import React from "react";
import styled from "styled-components";

const HomeBannerStyle = styled.main`
  width: 100vw;
  height: 80vh;
  background: #333;
  display: flex;
  gap: 1rem;

  .mainBanner {
    display: flex;
    gap: 1rem;
    width: 95%;
    height: 90%;
  }

  .greeting {
    width: 60%;
    height: 80%;
    text-align: center;
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyle>
      <div className="mainBanner">
        <div className="greeting">
          <h2
            className="text-light text-center d-flex justify-content-center align-items-center h-75"
            style={{ fontSize: "3rem" }}
          >
            Welcome to Citizen Feedback Platform
          </h2>
          <button
            className="btn text-light"
            style={{ backgroundColor: "orangered" }}
          >
            Get Started !
          </button>
        </div>
        <div className="report-img" style={{ paddingTop: "3rem" }}>
          <img
            src="images/womanhone.jpeg"
            alt="woman"
            width="400"
            height="400"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
