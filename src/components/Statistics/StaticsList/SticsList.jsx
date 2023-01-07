import { StatisticItem } from '../StaticItem/StatisticItem';
import { StaticContainer, StaticList } from './StaticList.styled';
import { getRandomHexColor } from '../../../utils/getRandomColor';

export const StatisticsList = ({ stats, sectionTitle, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <StaticContainer>
        {sectionTitle && <h3 className="title">{sectionTitle}</h3>}

        <StaticList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <StatisticItem
                key={id}
                label={label}
                percentage={percentage}
                bgcolor={getRandomHexColor()}
              />
            );
          })}
        </StaticList>
      </StaticContainer>
    </>
  );
};
