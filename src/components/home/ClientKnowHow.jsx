import React from "react";
import styled from "styled-components";

const ClientKnowHowStyle = styled.main`
  width: 70vw;
  height: 600px;
  background-color: rgb(241, 179, 62);
  position: absolute;
  top: 90%;
  left: 15%;
  border-radius: 2rem;
  display: flex;
  gap: 1rem;

  .column-1 {
    width: 50%;
    .steps-to-report {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: black;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 0.31rem solid aliceblue;

      & li:nth-of-type(5) {
        padding-bottom: 4px;
      }
    }
  }

  .report-img {
    object-fit: contain;
    width: 50px !important;
    height: 50px;
  }

  .column-2{
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .report-links{
    display: flex;
    justify-content: space-around;
    color: black;
    text-decoration: none;

    &:hover{
      background-color: rgba(0,0,0, .9);
      color: grey;
    }
  }

  .report-list{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ClientKnowHow = () => {
  return (
    <ClientKnowHowStyle>
      <div className="column-1">
        <ol className="steps-to-report">
          <h3>Steps to report a problem</h3>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing!</li>
          <li>Lorem, ipsum dolor sit amet adipisicing.</li>
          <li>Lorem ipsum dolor sit amet coelit.</li>
          <li>Lorem ipsum dolor, sit amet consectetu</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ol>
        <div className="row some-statistics">
          <div className="col-md-2">
            {" "}
            <div className="stat-value">12,000</div>
            <div className="stat-description">Description 1</div>
          </div>
          <div className="col-md-2">
            {" "}
            <div className="stat-value">5,000</div>
            <div className="stat-description">Description 2</div>
          </div>
          <div className="col-md-2">
            {" "}
            <div className="stat-value">483,000</div>
            <div className="stat-description">Description 3</div>
          </div>
        </div>
      </div>
      <div className="column-2">
        <h3>Recently posted problems</h3>
        <ol className="report-list">
          <li>
            <a href="/"  className="report-links">
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
