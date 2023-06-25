import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// селектори автентифікації (витягнемо нижче імʼя юзера)
import authSelectors from '../../redux/auth/authSelectors';
// операції авторизації (цікавить логаут)
import authOperations from 'redux/auth/authOperations';

import {
  StyledButton,
  UserMenuContainer,
  Greeting,
  AvatarThumb,
  Avatar,
} from './UserMenu.styled';

//  дефолтна іконка юзера
import UserIco from '../../images/user-ico.png';

// на кнопці диспач який доставляє оперейшн логаут в редʼюсер
const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  return (
    <UserMenuContainer>
      <AvatarThumb>
        <Avatar src={UserIco} alt="avatar" />
      </AvatarThumb>
      <Greeting>Welcome, {userName}</Greeting>
      <StyledButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </StyledButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
