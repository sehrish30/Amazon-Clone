import React from 'react'
import '../css/Checkout.css'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                  alt="checkout ad"/>

                 <div>
                     <h2 className="checkout__title">
                         Your Shopping Basket
                     </h2>
                 </div> 
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
