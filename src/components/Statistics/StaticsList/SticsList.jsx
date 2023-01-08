import PropTypes from 'prop-types';
import { StatisticItem } from '../StaticItem/StatisticItem';
import { StaticContainer, StaticList } from './StaticList.styled';
import { getRandomHexColor } from '../../../utils/getRandomColor';

export const StatisticsList = ({ stats, title }) => {
  return (
    <>
      <StaticContainer>
        {title && <h3 className="title">{title}</h3>}

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

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  sectionTitle: PropTypes.string,
};
