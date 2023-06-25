import React from 'react';

import { NavigationContainer } from './Navigation.styled';
import { StyledNavLink } from 'components/Header/Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // кнопку контактів рендеримо тільки якщо залогінені
  return (
    <NavigationContainer>
      <StyledNavLink to="/">Main</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationContainer>
  );
};

export default Navigation;
