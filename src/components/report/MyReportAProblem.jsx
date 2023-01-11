import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </StyledReportPage>
  );
};

export default ReportAProblem;
