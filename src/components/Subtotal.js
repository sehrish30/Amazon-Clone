import React from 'react'
import "../css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';
import {useHistory} from "react-router-dom";

const Subtotal = () => {

    const history = useHistory();
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
             prefix = {"$"}
             />

             <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
