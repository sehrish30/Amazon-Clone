import React from 'react'
import "../css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
             renderText = {(value) => (
                 <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p> 
                    <small className="subtotal__gift">
                      <input type="checkbox" />This order contains a gift
                    </small>
                 </>
             )}

             decimalScale = {2}
             value = {getBasketTotal(basket)}
             displayType = {"text"}
             thousandSeparator = {true}
             prefix = {"BHD"}
             />

             <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
