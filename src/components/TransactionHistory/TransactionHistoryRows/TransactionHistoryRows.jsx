import { TableСell, TableRow } from './TransactionHistoryRows.styled';

export const TransactionHistoryRows = ({ amount, currency, id, type }) => {
  return (
    <TableRow key={id}>
      <TableСell>{type}</TableСell>
      <TableСell>{amount}</TableСell>
      <TableСell>{currency}</TableСell>
    </TableRow>
  );
};
