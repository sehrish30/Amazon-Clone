import React from 'react'
import { useStateValue } from '../contexts/StateProvider';
import '../css/checkoutProduct.css'

const CheckoutProduct = ({id, image, title, price, rating}) => {

    const [{basket}, dispatch] =useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Checkout Product"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkout__price">
                    <small>BHD</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                   {
                       Array(rating)
                        .fill()
                        .map((_, i)=>(
                            <span role="img" aria-label="star">⭐</span>
                        ))
                   }                    
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
