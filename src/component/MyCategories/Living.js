

import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';

const Living = () => {
    const [living, setLiving] = useState([]);
    const { ProductDatas } = useContext(LoginContext);

    useEffect(() => {
        setLiving(
            ProductDatas &&
            ProductDatas.filter((datas) => {
                return datas.category === 'livingroom';
            })
        );
    }, [ProductDatas]);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">My Living Room</h1>
             
            <div className="row">
                {living && living.map((datas) => (
                    <Link className="col-md-4 mb-4 text-decoration-none" key={datas.id} to={`/productDetails/${datas.id}`}>
                        <div className="card">
                            <img src={datas.image} alt={datas.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{datas.name}</h5>
                                <p className="card-text">{datas.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Living;