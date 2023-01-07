import { StatisticItem } from '../StaticItem/StatisticItem';
import { StaticContainer, StaticList } from './StaticList.styled';
import { getRandomHexColor } from '../../../utils/getRandomColor';
import { TitleBetweenTasks } from '../../App/App.styled';

export const StatisticsList = ({ stats, sectionTitle, title }) => {
  return (
    <>
      <TitleBetweenTasks>{title}</TitleBetweenTasks>
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
