import { Container } from 'components/App.styled';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
