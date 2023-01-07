import styled from '@emotion/styled';

export const TableСell = styled.td`
  width: 150px;
  text-align: center;
  padding: 5px 0;
  border: 1px gray solid;
`;

export const TableRow = styled.tr`
  border: 1px gray solid;

  :nth-child(even) {
    background-color: #e6e6e6;
  }
`;
