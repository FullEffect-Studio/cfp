import styled from "styled-components";
import ClientKnowHow from "./ClientKnowHow";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomeBannerStyle = styled.main`
  width: 100vw;
  height: 95vh;
  background: #333;
  display: flex;
  gap: 1rem;
  position: relative;

  .report-img img{
    width: 500px;
    height: 500px;
    padding-bottom: 1rem;
  }

  .mainBanner {
    display: flex;
    gap: 1rem;
    // width: 95%;
    height: 90%;
    justify-content: center;
    align-items: center;

    
    .greeting {
      width: 60%;
      height: max-content;
      text-align: center;
      padding-top: 5rem;
    }

    .greetings h2{
      display: none;
    }
  }

  .greeting-message{
    display: none;
  }
  
  @media screen and (max-width: 600px) {
    height: max-content ;
    margin-bottom: 110rem;
    min-height: 140vh;
    
    .mainBanner{
      flex-direction: column-reverse;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      height: 85%;

      & .greeting{
        width: 100%;
        height: 100%;
        padding-top: 1rem;

    }

    .report-img img{
      width: 320px;
      height: 320px;
      padding-left: 1rem;
    }

    h2{
      font-size: 30px;
    }
  }

  
`;
const HomeBanner = () => { 
  return (
    <HomeBannerStyle data-scroll-section>
      <Container>
        <div className="mainBanner" data-scroll-section>
          <div className="greeting">
            <h2
              className="text-light text-center d-flex justify-content-center align-items-center greeting-message"
              style={{ fontSize: "40px" }}
            >
              Welcome to Citizen Feedback Platform
            </h2>
            <p className="text-light w-90">
              Mapping and reporting community problems to the Authorities
              responsible for resolving them – anywhere in Ghana.
            </p>
            <Link to="/admin/signin/">
              <button
                className="btn btn-lg text-light p-3 text-lg"
                style={{ backgroundColor: "orangered" }}
              >
                Get Started !
              </button>
            </Link>
          </div>
          <div className="report-img" style={{ paddingTop: "3rem" }}>
            <img
              src="images/womanhone.jpeg"
              alt="woman"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </Container>
      <ClientKnowHow />
    </HomeBannerStyle>
  );
};

export default HomeBanner;
