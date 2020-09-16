import { Link, useHistory } from 'react-router-dom'
import React, {useState} from 'react'
import '../css/Login.css'
import {auth} from '../firebase'

const Login = () => {

  const history = useHistory();

    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const signIn = e => {
       e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
         .then(auth =>{
           history.push("/")
         }) 
         .catch(err => alert(err.message)); 
    }

    const register = e => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
           .then((auth) => {
             console.log("Successful",auth);
             if(auth){
               history.push('/');
             }
           })
           .catch(err => alert(err.message));
    }

    return (
        <div className="login">
          <Link to ="/">
            <img className="login__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo"/>
           </Link>

           <div className="login__container">
               <h1>Sign In</h1>
                 
               <form>
                 <h5>E-mail</h5>
                 <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>

                 <h5>Password</h5>
                 <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                 <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
               </form>

             <p>
                 By signing-in you agree to the  AMAZON FAKE CLONE Conditions of Use
                 & sale. Please see our Privacy Notice, our Cookies Notice 
                 and our interest-Based Ads Notice.
             </p>  
             <button type="submit" onClick={register} className="login__registerButton">Create your Amazon account</button>
           </div>

        </div>
    )
}

export default Login
