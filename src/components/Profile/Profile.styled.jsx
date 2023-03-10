import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 200px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  img {
    display: block;
    margin: 0 auto;
    width: 100px;
  }
`;

export const ProfileDescription = styled.div`
  text-align: center;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  align-items: center;

  flex-direction: column;
`;
