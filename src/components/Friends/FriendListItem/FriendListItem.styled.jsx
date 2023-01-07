import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  width: 230px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  padding: 5px 5px 5px 10px;
  box-sizing: border-box;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  transition: scale 250ms ease-in-out;

  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

export const FriendsName = styled.p`
  margin: 0 0 0 20px;
`;

export const FriendsStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ status }) => {
    switch (status) {
      case 'isOnline':
        return 'green';
      case 'offline':
        return 'red';
      default:
        return 'grey';
    }
  }};
`;
