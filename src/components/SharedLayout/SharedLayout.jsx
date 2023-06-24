import { Container } from 'components/App.styled';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
