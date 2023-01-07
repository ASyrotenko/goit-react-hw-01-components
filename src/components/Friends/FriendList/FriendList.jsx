import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </>
  );
};
