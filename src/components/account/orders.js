import React from 'react';

const Orders = props => {
    console.log(props);
    return (
        <div>
            <h1 className="center">My Orders</h1>
            <ol>
                <li>Wicked Thing 1</li>
                <li>Wicked Thing 2</li>
                <li>Wicked Thing 3</li>
                <li>Wicked Thing 4</li>
                <li>Wicked Thing 5</li>
            </ol>
        </div>
    );
}

export default Orders;