import React, { Component } from 'react';

export const Tables = props => {
    return (
        <>
            <h3 className="text-center mb-4">Recent Transactions</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">From User</th>
                        <th scope="col">To User</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Transfer Reason</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Ron Gabbay</td>
                        <td>Amir Lellouch</td>
                        <td>30 LS</td>
                        <td>25.7.2020</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}