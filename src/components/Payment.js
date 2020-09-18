import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useStateValue } from '../contexts/StateProvider';
import "../css/Payment.css";
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../contexts/reducer';
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "../axios";
import {db} from "../firebase"

const Payment = () => {

    let history = useHistory();

    const [{basket, user}, dispatch] =useStateValue();
    const ref = React.createRef();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);



    // change the stripe info whenever the basket changes.
    useEffect(() => {
      let sendingPrice = Math.round(getBasketTotal(basket) * 100);
      // generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              // Stripe expects the total in a currencies subunits also called subcurrency
              url: `/payments/create?total=${sendingPrice}`
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
  }, [basket])

    console.log("THE SECRET IS >>>", clientSecret)

    const handleSubmit = async(event) => {
      event.preventDefault(true);
      setProcessing(true);  
      
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }).then(({paymentIntent})=> {

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
          })

        // paymentIntent  = payment Confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace('/orders');
      });
    }

    const handleChange = event => {
      setDisabled(event.empty);
      setError(event.error? event.error.message: "");
    }


    return (
        <div className="payment">
            <div className="payment__container">

            <h1>
                Checkout ({<Link to="/checkout">{basket?.length} items)</Link>}
            </h1>
                {/* Payment section Delivery Address */}
                <div className="payment__section">
                  <div className="payment__title">
                    <h3>Delivery Address</h3>
                  </div>
                  <div className="payment__address">
                      <p>{user?.email}</p>
                      <p>123 React Lane</p>
                      <p>Bahrain, Manama</p>
                  </div>
                 </div>
                {/* Payment section Review Items */}
                <div className="payment__section payment__itemSection">
                    <div classame="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                       
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
                {/* Payment section Payment method */}
                <div className="payment__section">
                  <div className="payment__title">
                    <h3>Payment Method</h3>
                   </div>   
                  <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                    <div id="payment__element">
                        <CardElement className="StripeElement" onChange={handleChange}/>
                      </div>
                        <div className="payment__priceContainer">
                          <CurrencyFormat
                            renderText ={(value) => (
                                <>
                                    <h4>Order Total: {value}</h4>
                                </>
                            )}
                            decimalScale = {2}
                            value = {getBasketTotal(basket)}
                            displayType = {"text"}
                            thousandSeparator = {true}
                            prefix = {"BHD"}
                           />
                           <button disabled={processing || disabled || succeeded}>
                               <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                           </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                  </div>
                 </div>

            </div>
        </div>
    )
}

export default Payment
