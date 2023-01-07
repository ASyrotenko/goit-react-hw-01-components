import styled from '@emotion/styled';

export const StaticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 5px;

  background-color: ${props => {
    return props.bgcolor;
  }};
`;
