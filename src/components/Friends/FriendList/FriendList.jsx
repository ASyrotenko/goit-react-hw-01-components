import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';
import { TitleBetweenTasks } from '../../App/App.styled';

export const FriendList = ({ friends, title }) => {
  return (
    <>
      <TitleBetweenTasks>{title}</TitleBetweenTasks>
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
