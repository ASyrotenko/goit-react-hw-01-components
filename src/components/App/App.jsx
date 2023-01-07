import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../Statistics/StaticsList/StatisticsList';
import { Container } from './App.styled';
import user from '../../user.json';
import statistics from '../../data.json';

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
    </Container>
  );
};
