import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
