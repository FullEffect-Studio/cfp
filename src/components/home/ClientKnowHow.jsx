import React from "react";
import styled from "styled-components";

const ClientKnowHowStyle = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap");
  width: 70vw;
  height: 600px;
  background-color: rgb(241, 179, 62);
  position: absolute;
  top: 90%;
  left: 15%;
  border-radius: 2rem;
  display: flex;

  .column-1 {
    width: 50%;
    .steps-to-report {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      font-size: 18px;
      font-weight: 600;

      
      & li:nth-of-type(5) {
        padding-bottom: 1rem;
      }
    }
  }

  .report-img {
    object-fit: contain;
    width: 80px !important;
    height: 80px;
  }

  .column-2 {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .report-links {
    display: flex;
    justify-content: space-around;
    color: black;
    text-decoration: none;
    padding: 3px;

    &:hover {
      background-color: white;
      color: #333;
    }
  }

  .report-list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
  }

  @media screen and (max-width: 600px){
    width: 85vw;
    height: max-content;
    flex-direction: column;
    top: 92%;
    left: 8%;

    .column-1 {
      width: 100%;
    }
    .column-2 {
      width: 100%;
    }
  }

`;

const ClientKnowHow = () => {
  return (
    <ClientKnowHowStyle data-scroll-section>
      <div className="column-1">
        <ol className="steps-to-report" style={{ listStyleType: "none" }}>
          <h3 className="text-secondary">Steps to report a problem</h3>
          <li>
            <img src="images/1.png" alt="One" width="44px" /> Lorem ipsum dolor
            sit amet consectetur!
          </li>
          <li>
            <img src="images/2.png" alt="One" width="44px" /> Lorem, ipsum dolor
            sit amet adipisicing.
          </li>
          <li>
            <img src="images/3.png" alt="One" width="44px" /> Lorem ipsum dolor
            sit amet coelit.
          </li>
          <li>
            <img src="images/4.png" alt="One" width="44px" /> Lorem ipsum dolor,
            sit amet consectetu
          </li>
          {/* <li><img src="images/5.png" alt="One" width="44px" /> Lorem ipsum dolor sit amet consectetur.</li> */}
        </ol>
        <hr style={{width: "80%", height:"1rem !important", margin: "2rem auto"}} />
        <div
          className="row some-statistics text-center"
          style={{ paddingLeft: "1rem", width: "100% !important" }}
        >
          <div className="col-lg-4">
            {" "}
            <div
              className="stat-value"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <span className="text-primary" style={{ fontSize: "28px", fontWeight: "900",fontFamily: "Rubik Bubbles, cursive" }}>
                {" "}
                12,000
              </span>{" "}
              <span className="stat-description text-light" style={{fontSize:"19px", fontWeight: "700"}}>reports recently</span>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div
              className="stat-value"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <span className="text-primary" style={{ fontSize: "28px", fontWeight: "900",fontFamily: "Rubik Bubbles, cursive" }}>9,000</span>
              <span className="stat-description text-light" style={{fontSize:"19px", fontWeight: "700"}}>report for past month</span>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            {" "}
            <div
              className="stat-value"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <span className="text-primary" style={{ fontSize: "28px", fontWeight: "900",fontFamily: "Rubik Bubbles, cursive" }}>
                483,000
              </span>
              <span className="stat-description text-light" style={{fontSize:"19px", fontWeight: "700"}}>report for last year</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="column-2">
        <h3>Recently posted problems</h3>
        <ol className="report-list" style={{ listStyleType: "disc" }}>
          <li>
            <a href="/" className="report-links">
              Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor. Lorem
              ipsum dolor sit.
              <img
                className="report-img"
                src="https://rnz-ressh.cloudinary.com/image/upload/s--Qx_PXZQo--/c_crop,f_auto,h_381,q_auto,w_610,x_0,y_69/4NYK6GX_image_crop_52829"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/" className="report-links">
              Lorem ipsum dolor sit amet. ipsum dolor. Lorem ipsum dolor sit.
              <img
                className="report-img"
                src="https://rnz-ressh.cloudinary.com/image/upload/s--Qx_PXZQo--/c_crop,f_auto,h_381,q_auto,w_610,x_0,y_69/4NYK6GX_image_crop_52829"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/" className="report-links">
              Lorem ipsum dolor sit amet. ipsum dolor. Lorem ipsum dolor sit.
              <img
                className="report-img"
                src="https://rnz-ressh.cloudinary.com/image/upload/s--Qx_PXZQo--/c_crop,f_auto,h_381,q_auto,w_610,x_0,y_69/4NYK6GX_image_crop_52829"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/" className="report-links">
              Lorem ipsum dolor sit amet consectetur.ipsum dolor. ipsum dolor.
              Lorem ipsum dolor sit.ipsum dolor. Lorem ipsum dolor sit.Lorem
              ipsum dolor sit.{" "}
              <img
                className="report-img"
                src="https://rnz-ressh.cloudinary.com/image/upload/s--Qx_PXZQo--/c_crop,f_auto,h_381,q_auto,w_610,x_0,y_69/4NYK6GX_image_crop_52829"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/" className="report-links">
              Lorem ipsum dolor sit amet consectetur.ipsum dolor. Lorem ipsum
              dolor sit.{" "}
              <img
                className="report-img"
                src="https://rnz-ressh.cloudinary.com/image/upload/s--Qx_PXZQo--/c_crop,f_auto,h_381,q_auto,w_610,x_0,y_69/4NYK6GX_image_crop_52829"
                alt=""
              />
            </a>
          </li>
        </ol>
      </div>
    </ClientKnowHowStyle>
  );
};

export default ClientKnowHow;
