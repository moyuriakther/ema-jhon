import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.cart;
    const reviewItemStyle = {
        borderBottom : '1px solid gray',
        borderRight : '1px solid gray',
        margin : '0px 20px 0px 100px',
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <h4> Quantity: {quantity}</h4>
            <p><small>${price}</small></p>
            <button onClick={() => props.handleRemove(key)} className="addItemBtn">Remove</button>
        </div>
    );
};

export default ReviewItem;