import React from 'react';
import { NavLink } from 'react-router-dom';

import { TopMenu, StyledNavLink, ButtonContainer } from './Header.styled';

const Header = () => {
  return (
    <TopMenu>
      <ButtonContainer>
        <StyledNavLink to="/">Main</StyledNavLink>
        <StyledNavLink to="/">Notes</StyledNavLink>
      </ButtonContainer>
      <ButtonContainer>
        <StyledNavLink to="/register">Registration</StyledNavLink>
        <StyledNavLink to="login">LogIn</StyledNavLink>
      </ButtonContainer>
      <div>info</div>
    </TopMenu>
  );
};

export default Header;
