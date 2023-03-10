import React from "react";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";

const ReportAProblemStyle = styled.div`
  width: 99vw;
  height: 470px;
  background-color: rgb(241, 179, 62);
  margin: 730px auto 3rem auto;

  .main-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 90%;
    height: 90%;
    margin: auto;
  }
  .paragraph-container {
    width: 50%;
    border-radius: 1rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 1400px;
    height: max-content;

    .main-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .paragraph-container {
      width: 100%;
    }

    .report-container {
      text-align: center;
    }
    .input {
      display: none;
    }
  }
`;
const ReportAProblem = () => {
  return (
    <ReportAProblemStyle data-scroll-section>
      <div className="p-4 main-container" id="reportPage">
        <p
          className="paragraph-container bg-secondary p-5 text-light"
          style={{ height: "90%", fontSize: "19px" }}
        >
          Citizen Feedback Platform (CFP) is a platform to assist community
          social workers to collect and upload feedback from citizens and for
          public officials to monitor the issues in the community. The project
          takes into account what is important to local community members and to
          bring the voices of the community to the decision makers.
        </p>
        <div
          className="report-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".6rem",
            paddingTop: "1rem",
          }}
        >
          <h1 className="text-center text-light">Report A Problem</h1>
          <h4 className="">
            (like graffiti, fly tipping, broken paving slabs, or street
            lighting)
          </h4>
          <h5 className="text-center">
            <sup>**</sup>Enter a nearby postcode, or street name and area:
          </h5>
          <h6 className="text-center">
            Like Cape Coast, UCC hospital, Ahwiaa road
          </h6>
          <div className="input" style={{ display: "flex" }}>
            <input
              className="form-control"
              type="text"
              style={{ height: "4rem", width: "80%" }}
              placeholder="Name of the place"
            />
            <input className="btn btn-dark" type="button" value="Go" />
          </div>

          <div className="text-center">
            <button
              className="btn btn-dark text-center p-3 mt-4"
              type="submit"
              style={{
                width: "max-content",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                height: "4rem",
                margin: "auto"
              }}
            >
              Use My Current Location <FaLocationArrow size="20px" />
            </button>
          </div>
        </div>
      </div>
    </ReportAProblemStyle>
  );
};

export default ReportAProblem;
