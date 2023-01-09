import React from 'react'
import styled from 'styled-components'
const StyledForm = styled.main`
    width: 80vw;
    height: 500px;
    background: rgb(241, 179, 62);
    margin: 3rem auto;

    .col-md-7{
      height: 500px;
      
      & img{
        height: 100%;
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
          <div className="col-md-5"></div>
        </div>
    </StyledForm>
  )
}

export default AdminMainLogin