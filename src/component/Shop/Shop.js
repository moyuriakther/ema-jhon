import React, { useState } from 'react';
import css from './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {
    let data = fakeData.splice(0, 20);
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddProduct = product =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    // console.log(data);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product =><Product product={product} handleAddProduct={handleAddProduct}></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;