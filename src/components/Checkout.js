import React from 'react'
import { useStateValue } from '../contexts/StateProvider'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const ref = React.createRef();
    return (
         
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                  alt="checkout ad"/>

           
                 <div>
                    <h3>Hello {user?.email}</h3>
                     <h2 className="checkout__title">
                         Your Shopping Basket
                     </h2>
                     <FlipMove enterAnimation="fade" leaveAnimation="fade"> 
                        {  
                            basket.map(item => (
                                <CheckoutProduct
                                key ={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                ref={ref}
                                />
                            ))
                        }
                     </FlipMove> 
                         
                 </div> 
               
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>

      
    )
}

export default Checkout
