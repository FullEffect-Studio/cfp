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

  .steps-to-report {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: black;
    font-size: 18px;
    font-weight: 600;

    & li:nth-of-type(5) {
      border-bottom: 0.31rem solid aliceblue;
      padding-bottom: 4px;
    }
  }
`;

const ClientKnowHow = () => {
  return (
    <ClientKnowHowStyle>
      <ol className="steps-to-report">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam!
        </li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum?
        </li>
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
    </ClientKnowHowStyle>
  );
};

export default ClientKnowHow;
