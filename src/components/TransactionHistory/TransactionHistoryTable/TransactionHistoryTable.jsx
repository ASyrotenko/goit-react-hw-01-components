import { TransactionHistoryRows } from '../TransactionHistoryRows/TransactionHistoryRows';
import {
  Table,
  TableBody,
  TableHeadCell,
} from './TransactionHistoryTable.styled';

export const TransactionHistoryTable = ({ data, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <Table>
        <thead>
          <tr>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>Currency</TableHeadCell>
          </tr>
        </thead>

        <TableBody>
          {data.map(({ amount, currency, id, type }) => {
            return (
              <TransactionHistoryRows
                key={id}
                amount={amount}
                currency={currency}
                type={type}
              />
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
