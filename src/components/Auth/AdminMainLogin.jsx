import React from "react";
import styled from "styled-components";
const StyledForm = styled.main`
  width: 80vw;
  height: max-content;
  background: rgb(241, 179, 62);
  margin: 3rem auto;

  .col-md-7 {
    height: 500px;

    & img {
      height: 100%;
      width: 100%;
    }
  }

  .col-md-5 {
    background: #333;


    & h3{
      padding-top: 4rem;
     } 
    
    & form {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 60%;
      margin: 3rem auto;

      & .d-flex {
        height: 3rem;
        gap: 20px;
        align-items: center;'
        color: white;
        background: green;
        
      }

    }
  }
`;
const AdminMainLogin = () => {
  return (
    <StyledForm>
      <div className="row">
        <div className="col-md-7">
          <img src="/images/womanhone.jpeg" alt="my-image" />
        </div>
        <div className="col-md-5">
          <h3 className="text-warning text-center">Admin Login Page</h3>
          <form action="" className="text-light">
            <div className="d-flex form-group">

            <label htmlFor="email">Email</label>
            <input className="form-control" type="text" name="email" />
            </div>
            <div className="d-flex form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" />
            </div>
            <div className="d-flex">
              <button className="btn btn-primary">Login</button>
              <p>
                Don't have an account? <a href="/">Sign-up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </StyledForm>
  );
};

export default AdminMainLogin;
