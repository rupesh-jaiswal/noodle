import React from 'react';
import './Card.css';

const Card = ({
    noodle, 
}) => {
    return (
        <div className="card-container">
            <ul>
                <img className="card-image" src={noodle.image} />
                <li>{noodle.brand}</li>
                <li>{noodle.variety}</li>
            </ul>
        </div>
    );
};

export default Card;
