import React from 'react';
import TableBody from './TableBody.jsx'
import { transactions } from '../components/transactions.jsx'

export const Tables = props => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">From User</th>
                        <th scope="col">To User</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Transfer Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(trans =>
                        <TableBody
                            key={trans.id}
                            id={trans.id}
                            fromUser={trans.fromUser}
                            toUser={trans.toUser}
                            amount={trans.amountTransfered}
                            date={trans.date}
                            reason={trans.transferReason}
                        />
                    )}
                </tbody>
            </table>
        </>
    )
}