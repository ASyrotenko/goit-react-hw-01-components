import {
  FriendsItem,
  FriendsName,
  FriendsStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsItem key={id}>
      <FriendsStatus status={isOnline ? 'isOnline' : 'offline'}></FriendsStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
};
