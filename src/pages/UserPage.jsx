import React from 'react';
import { Link } from "react-router-dom";
import {Tables} from '../components/Tables.jsx'
const totalAmount = 30;
const transactions = [
    {}
]

const UserPage = () => {


    return (
        <>
            <div className="jumbotron text-center">
                <h1 className="display-4">Lira Shapira</h1>
                <p className="lead">Simple Community Solution</p>
            <Link className="btn btn-primary btn-lg mt-2" to="/MakeTransaction">Make Transaction</Link>
            </div>
            <Tables />
        </>
    );
}

export default UserPage;