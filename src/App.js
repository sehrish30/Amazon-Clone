import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Home from './components/Home';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Login from './components/Login';
import {auth} from './firebase'
import { useStateValue } from './contexts/StateProvider';
import Payment from './components/Payment';
import Orders from './components/Orders';

//Stripe imports
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

function App() {

  const promise = loadStripe('pk_test_51HSUY0AdvemoYxG9xgzcDDUzNF3YrhNkBrTtIaBHDta61z9MAPfQ4uXzj0OWGrL30p2bYM6nkSmoqfAUjec2BRlw00WMx5fgtF');
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged((authUser) => {
      console.log('User found', authUser);

      if(authUser){   
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
         dispatch({
           type: 'SET_USER',
           user: null
         })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">

      <Switch>
      <Route path="/orders">
       <Header/>
        <Orders />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment />
       </Elements>
      </Route>
      <Route path="/checkout">   
      <Header/>
        <Checkout />
      </Route>
      <Route path="/">
      <Header/>
        <Home />
      </Route>
      </Switch>
      
      </div>
    </Router>
  );
}

export default App;
