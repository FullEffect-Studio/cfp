import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const PageFooterStyled = styled.footer`
  width: 100vw;
  height: 60vh;
  background: #333;
  position: relative;
  bottom: 0;

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 600px) {
    height: max-content;
    .row {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-items: center;
      text-align: center;
    }

    .col-md-3 {
      width: 100%;
    }

    .donate-box {
      width: 100%;
    }
  }
`;

const PageFooter = () => {
  return (
    <PageFooterStyled>
      <div data-scroll-section>
        <Container>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            <h2 className="p-3">CitizenFeedbackPlatform</h2>
          </a>
          <div className="row  m-auto">
            <div className="col-md-3 text-light">
              <p>
                Mapping and reporting street problems to the councils
                responsible for fixing them – anywhere in Ghana.
              </p>
            </div>
            <div className="col-md-3">
              <ol style={{ listStyleType: "none" }}>
                <li>
                  <a href="">Report a problem</a>
                </li>
                <li>
                  <a href="">Your Reports</a>
                </li>
                <li>
                  <a href="">All Reports</a>
                </li>
                <li>
                  <a href="">Local Alerts</a>
                </li>
              </ol>
            </div>
            <div className="col-md-3">
              <ol style={{ listStyleType: "none" }}>
                <li>
                  <a href="">CitizenFeedBackPlatform Pro</a>
                </li>
                <li>
                  <a href="">Your Reports</a>
                </li>
                <li>
                  <a href="">All Reports</a>
                </li>
                <li>
                  <a href="">Local Alerts</a>
                </li>
              </ol>
            </div>
            <div
              className="col-md-3 p-3 donate-box"
              style={{ backgroundColor: "orange" }}
            >
              <p>
                Your Donations help brings more features to improve your
                experience
              </p>
              <button className="btn btn-secondary" type="submit">
                Donate Now
              </button>
            </div>
          </div>
          <hr style={{ color: "orange", height: "1.55rem" }} />

          <div
            className="text-center pb-4"
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              height: "3rem",
              alignItems: "center",
            }}
          >
            <BsFacebook size="40px" />
            <BsGithub size="40px" />
            <BsLinkedin size="40px" />
            <BsTwitter size="40px" />
          </div>
        </Container>
      </div>
    </PageFooterStyled>
  );
};

export default PageFooter;
