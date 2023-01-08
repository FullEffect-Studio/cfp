import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledGroup = styled.section`
  margin-bottom: 3rem;

  .row {
    & .col-md-6 {
      margin: 2rem auto;
      width: 430px;
      height: 400px;
      border-radius: 10%;
      background: white;
      margin-right: ;

      &:nth-of-type(2) {
        background: rgb(241, 179, 62);
      }
    }
  }
`;
const ItemsGroup = () => {
  return (
    <StyledGroup data-scroll-section>
      <Container>
        <div className="row">
          <div className="col-md-6 text-justify">
            <h3 style={{marginTop:"1.3rem", textAlign: "center"}}>Free statistics for councils</h3>
            <p style={{width: "90%", margin: "1rem auto", fontSize:'22px'}}>
              Explore detailed statistics on the <span style={{borderBottom: "3px solid orange", color: "orange"}}>CitizenFeedbackPlatform</span> councils dashboard — for
              free. What do people report most? How’s your response rate? And
              how do you compare to other places in Ghana?
            </p>
            <button className="btn btn-secondary btn-lg">Login Now</button>
          </div>
          <div className="col-md-6">
            <h3 style={{marginTop:"1.5rem", textAlign: "center"}}>Go Pro</h3>
            <p style={{width: "90%", margin: "1rem auto", fontSize:'22px'}}>
              Integrate CitizenFeedbackPlatform Pro with your council system for smooth,
              end-to-end report fulfilment. How much could you save?
            </p>
            <button className="btn btn-light btn-lg">Learn More</button>
          </div>
        </div>
      </Container>
    </StyledGroup>
  );
};

export default ItemsGroup;
