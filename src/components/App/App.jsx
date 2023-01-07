import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../Statistics/StaticsList/SticsList';
import { FriendList } from '../Friends/FriendList/FriendList';
import { Container } from './App.styled';
import user from '../../user.json';
import statistics from '../../data.json';
import friends from '../../friends.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <Container>
      <Profile
        title="1 - Social network profile"
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <StatisticsList
        title="2 - Statistics section"
        sectionTitle="Upload stats"
        stats={statistics}
      />
      <FriendList title="3 - Friends list" friends={friends} />
    </Container>
  );
};
