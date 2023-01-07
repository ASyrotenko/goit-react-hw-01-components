import PropTypes from 'prop-types';
import { TransactionHistoryRows } from '../TransactionHistoryRows/TransactionHistoryRows';
import {
  Table,
  TableBody,
  TableHeadCell,
} from './TransactionHistoryTable.styled';
import { TitleBetweenTasks } from '../../App/App.styled';

export const TransactionHistoryTable = ({ data, title }) => {
  return (
    <>
      <TitleBetweenTasks>{title}</TitleBetweenTasks>
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

TransactionHistoryTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
