import {
  ProfileCard,
  ProfileDescription,
  ProfileStats,
  ProfileStatsItem,
} from './Profile.styled';
import { Title } from '../App/App.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
  title,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <ProfileCard>
        <ProfileDescription>
          <img src={avatar} alt={username} className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </ProfileDescription>

        <ProfileStats>
          <ProfileStatsItem>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileCard>
    </>
  );
};
