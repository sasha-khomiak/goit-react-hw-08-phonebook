import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';

import {
  StyledButton,
  UserMenuContainer,
  Greeting,
  AvatarThumb,
  Avatar,
} from './UserMenu.styled';

import UserIco from '../../images/user-ico.png';

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectUserName);
  return (
    <UserMenuContainer>
      <AvatarThumb>
        <Avatar src={UserIco} alt="avatar" />
      </AvatarThumb>
      <Greeting>Welcome, {userName}</Greeting>
      <StyledButton type="button">Log Out</StyledButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
