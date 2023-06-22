import React from 'react';

import { AuthNavContainer } from './AuthNav.styled';

import { StyledNavLink } from 'components/Header/Header.styled';

const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="login">LogIn</StyledNavLink>
    </AuthNavContainer>
  );
};

export default AuthNav;
