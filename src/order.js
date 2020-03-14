import React from 'react';
import Card from './card';
import'./order.css';

function Order() {

    return (
        <div className="flex justify-between card-holder">
            {[1, 2, 3].map(element => {
                
                return <Card/>
            })}
        </div>
        
    )
}

export default Order;