import React from 'react';

import { NavigationContainer } from './Navigation.styled';
import { StyledNavLink } from 'components/Header/Header.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StyledNavLink to="/">Main</StyledNavLink>
      <StyledNavLink to="/">Notes</StyledNavLink>
    </NavigationContainer>
  );
};

export default Navigation;
