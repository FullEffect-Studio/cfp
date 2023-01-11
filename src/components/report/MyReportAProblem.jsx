import React from "react";
import styled from "styled-components";

const StyledReportPage = styled.main`
  width: 100vw;
  height: 100vh !important;
  background: white;

  & .col-md-5 {
    background: green;
    height: 100vh;
  }
`;

const ReportAProblem = () => {
  return (
    <StyledReportPage>
      <div className="row">
        <div className="col-md-5">kjc skm</div>
        <div className="col-md-7">

        </div>
      </div>
    </StyledReportPage>
  );
};

export default ReportAProblem;
