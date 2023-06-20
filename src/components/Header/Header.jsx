import React from 'react';

import {
  TopMenu,
  StyledNavLink,
  Navigation,
  AuthNav,
  UserMenu,
} from './Header.styled';

const Header = () => {
  return (
    <TopMenu>
      <Navigation>
        <StyledNavLink to="/">Main</StyledNavLink>
        <StyledNavLink to="/">Notes</StyledNavLink>
      </Navigation>
      <AuthNav>
        <StyledNavLink to="/register">Registration</StyledNavLink>
        <StyledNavLink to="login">LogIn</StyledNavLink>
      </AuthNav>
      <UserMenu>UserMenu</UserMenu>
    </TopMenu>
  );
};

export default Header;
