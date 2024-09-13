



import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../contextFolder/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Clients = () => {
    const { customerse } = useContext(LoginContext);
    const [clients, setClients] = useState([]);

    

    useEffect(() => {
        setClients(customerse.filter((users) => users.admin === false));

    }, [customerse]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Clients Lists</h1>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Registered ID</th>
                            <th>More</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {clients && clients.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <th>{user.username}</th>
                                <td>{user.email}</td>
                                <td>{user.id}</td>
                                <td>
                                    <Link to={`/clientslists/${user.id}`} ><button className="btn btn-info btn-sm">View</button></Link>
                                </td>                               
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <Link to="/"><button>Back </button></Link>
            </div>
        </div>
    );
};

export default Clients;
