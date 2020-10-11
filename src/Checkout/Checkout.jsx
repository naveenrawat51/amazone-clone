import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../SubTotal/SubTotal';

function Checkout() {
    const [{basket}] = useStateValue();

    const allProducts = basket.length > 0 ? basket.map(({ title, id, price, rating, image }, index) => (
        <CheckoutProduct
        key={index}
        title={title}
        id={id}
        price={price}
        rating={rating}
        image={image}
        />
    )) : null;

    return (
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._B423492668_.jpg" alt="offer"/>
        { basket.length === 0 ?
        <div>
        <h2>Your Shopping Cart is empty</h2>
        <p>you have no items in your basket, To buy <Link to="/">click Here</Link>.</p>
        </div> :
        <div>
        <h2 className="checkout__title">Your Shopping Cart</h2>
        <hr></hr>
        { allProducts }
        </div> }
        </div>
        { basket.length > 0 ?
        <div className="checkout__right">
            <SubTotal/>
        </div> : null }
        </div>
    )
}

export default Checkout
