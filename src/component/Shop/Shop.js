import React, { useEffect, useState } from 'react';
import css from './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    let data = fakeData.splice(0, 20);
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts)
    },[])
    const handleAddProduct = product =>{
        let toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
       setCart(newCart);
       addToDatabaseCart(product.key, count);
    }
    return (
        <div className="container">
            <div className="product-container">
                {
                    products.map(product =><Product showAddToCart={true} product={product} key={product.key} handleAddProduct={handleAddProduct}></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review"> <button className="addItemBtn">Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;