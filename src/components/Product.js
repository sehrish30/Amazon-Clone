import React from 'react'
import { useStateValue } from '../contexts/StateProvider';
import '../css/Product.css'

function Product({id ,title, image, price, rating}) {

    const [{}, dispatch] = useStateValue();

    // console.log("This is the basket >>>", basket);

    const addToBasket =() =>{
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                key: id
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                 {Array(rating).fill().map((_, i) => (
                    <span role="img" aria-label="star">⭐</span>
                 ))}
                    
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>


        </div>
    )
}

export default Product
