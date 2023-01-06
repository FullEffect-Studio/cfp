import React from 'react';
import styled from 'styled-components';
import NaviBar from '../home/Navibar';
import PageFooter from '../PageFooter';
import AdminMainLogin from './AdminMainLogin';

const AdminLoginFormStyle = styled.main`
    width: 100vw;
    height: 700px;
`;
const AdminLoginForm = () => {
  return (
    <AdminLoginFormStyle>
        <NaviBar />
        <AdminMainLogin />
        <PageFooter />
    </AdminLoginFormStyle>
  )
}

export default AdminLoginForm