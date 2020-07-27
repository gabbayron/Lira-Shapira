import React from 'react';
import { Link } from "react-router-dom";
import { Tables } from '../components/Tables.jsx'


const totalAmount = 30;

const UserPage = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container-fluid">
                    <h1 className="display-4">Lira Shapira</h1>
                    <p className="lead">Simple Community Solution</p>
                    <h3>**User** Current Lira Shapira Status : {totalAmount}</h3>
                    <Link className="btn btn-primary btn-lg mt-2" to="/MakeTransaction">Make Transaction</Link>
                </div>
            </div>
            <h3 className="text-center mb-4">Recent Transactions</h3>
            <Tables />
        </>
    );
}

export default UserPage;