import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
`;

export const AvatarThumb = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const Greeting = styled.p`
  font-weight: 700;
`;

export const StyledButton = styled.button`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border-width: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.06em;

  color: #ffffff;

  cursor: pointer;

  transition: background-color 250ms linear, transform 250ms linear;

  align-self: center;

  :hover {
    background-color: #5ab1f8;
    transform: scale(1.1);
  }

  margin-left: 20px;
`;
