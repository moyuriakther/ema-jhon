import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    let {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h2>Here is your Product details</h2>
            <Product product={product} showAddToCart = {false}/>
        </div>
    );
};

export default ProductDetails;