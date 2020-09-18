import React from 'react'
import { useStateValue } from '../contexts/StateProvider'
import "../css/Order.css"
import FlipMove from 'react-flip-move';
import moment from "moment"
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";

const Order = ({order}) => {

    const ref = React.createRef();
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            <p className="order_id">
                <small>{order.id}</small>
            </p>
     <FlipMove enterAnimation="fade" leaveAnimation="fade">       
            {order.data.basket?.map(item => (
                <CheckoutProduct
                key ={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                ref={ref}
                hideButton
                />
            
            ) )}
            <CurrencyFormat
                renderText ={(value) => (
                    <>
                        <h3 classNAme=" order__total">Order Total: {value}</h3>
                    </>
                )}
                decimalScale = {2}
                value = {order.data.amount / 100}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"BHD"}
                />

       </FlipMove>     
        </div>
    )
}

export default Order
