import React from 'react'
import "../css/order.css"
import moment from "moment"

const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>
    )
}

export default Order
