import React from 'react';
import { Link } from "react-router-dom";


const MakeTransaction = () => {
    return (
        <>
            <div className="jumbotron text-center">
                <h1 className="display-4">Lira Shapira</h1>
                <p className="lead">Simple Community Solution</p>
                <Link className="btn btn-primary btn-lg mt-2" to="/">Home Page</Link>
            </div>
            <div className="container">
                <h3>Transactions :</h3>
                <label>Phone Number :
                <input className="form-control" type="text" placeholder="Phone Number" />
                </label>
                <br />
                <label>Reason Of Transfer :
                <input className="form-control" type="text" placeholder="Reason Of Transfer" />
                </label>
                <br/>
                <label>Amount To Transfer :
                <input className="form-control" type="text" placeholder="Amount" />
                </label>
                <br/>
                <button className="btn btn-primary">Make Transaction</button>
            </div>
        </>
    );
}

export default MakeTransaction;