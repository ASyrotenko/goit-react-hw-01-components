import { Profile } from './Profile/Profile';
import { Container } from './App/App.styled';
import user from '../user.json';

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
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
        title="1 - Social network profile"
      />
    </Container>
  );
};
