import React from 'react';
import food from './images/food.svg';
import "./home.css"

function Home() {
    return (
        <div className="flex home">
            <h1>One cannot think well, love well, sleep well, if one has not dined well. </h1>
            <img src={food} alt="A plate with breakfast and sause and drink are on left and right." />
        </div>
    )
}

export default Home;