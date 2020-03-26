import React from 'react';
import './card.css';
import img from './images/food.svg'
function Card() {
    return (
        <div className="flex card-container">
            <img src={img} style={{height:'230px'}} alt="food plate" />
            <hr/>
            <p>Text about the image that is shown above.</p>
            <div className="details flex justify-between">
                <span className="price">12$</span>
                <button className="add">Cart</button>
            </div>
        </div>
    )
}

export default Card;