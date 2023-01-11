import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import NaviBar from "../home/Navibar";
import PageFooter from "../PageFooter";

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

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
    <>
      <NaviBar />
      <StyledReportPage>
        <div className="row">
          <div className="col-md-5">kjc skm</div>
          <div className="col-md-7">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "100vh" }}
              
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
            </MapContainer>
          </div>
        </div>
      </StyledReportPage>
      <PageFooter />
    </>
  );
};

export default ReportAProblem;
