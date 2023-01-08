import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';

import { StatisticsList } from '../Statistics/StaticsList/SticsList';
import statistics from '../../data/data.json';

import { FriendList } from '../Friends/FriendList/FriendList';
import friends from '../../data/friends.json';

import { TransactionHistoryTable } from '../TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';
import transactions from '../../data/transactions.json';

import { Container } from './App.styled';

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
      />
      <StatisticsList title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistoryTable data={transactions} />
    </Container>
  );
};
