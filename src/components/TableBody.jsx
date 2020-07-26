import React from 'react';

const TableBody = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.fromUser}</td>
            <td>{props.toUser}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.reason}</td>
        </tr>

    );
}

export default TableBody;