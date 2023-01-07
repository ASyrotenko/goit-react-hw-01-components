import { Profile } from '../Profile/Profile';
import user from '../../user.json';

import { StatisticsList } from '../Statistics/StaticsList/SticsList';
import statistics from '../../data.json';

import { FriendList } from '../Friends/FriendList/FriendList';
import friends from '../../friends.json';

import { TransactionHistoryTable } from '../TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';
import transactions from '../../transactions.json';

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
      <TransactionHistoryTable
        title={'4 - History of transactions'}
        data={transactions}
      />
    </Container>
  );
};
