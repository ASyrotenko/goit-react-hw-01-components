import { StaticItem } from './StatisticItem.styled';

export const StatisticItem = ({ id, label, percentage, bgcolor }) => {
  return (
    <StaticItem key={id} bgcolor={bgcolor}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </StaticItem>
  );
};
