import React from 'react'
import '../css/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
         <div className="home__container">
             <img className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
             <div className="home__row">

              <Product
               id="111"
               title="Kate Spade New York Camerson Medium Satchel Purse" 
               price = {10.99}
               image= 'https://images-na.ssl-images-amazon.com/images/I/911Be%2BTOE2L._AC_UY500_.jpg'  
               rating ={5}    
               />

              <Product
              id="112"
               title="DREAM PAIRS Women's Heels Pump Shoes" 
               price = {20.99}
               image= 'https://images-na.ssl-images-amazon.com/images/I/51C2riM4T9L._AC_UY395_.jpg'  
               rating ={2}    
               />
             </div>
             <div className="home__row">
             <Product
              id="112"
               title="SOOQOO Wall Mount Makeup Storage Organizer for Cosmetic Storage Box" 
               price = {15.99}
               image= 'https://images-na.ssl-images-amazon.com/images/I/51kCFjz8QaL._AC_SX425_.jpg'  
               rating ={5}    
               />
                <Product
                id="112"
                title="EDUPLINK Bluetooth Speakers Portable Wireless Speaker with Louder Crystal HD Stereo Sound" 
                price = {12.99}
                image= 'https://images-na.ssl-images-amazon.com/images/I/712CjkQy1iL._AC_SY450_.jpg'  
                rating ={3}    
                />
                <Product
                id="112"
                title="BESTOPE Makeup Brushes Kit (Rose Golden)" 
                price = {12.99}
                image= 'https://images-na.ssl-images-amazon.com/images/I/71JHl9cr4NL._SY355_.jpg'  
                rating ={5}    
                />
             </div> 
             <div className="home__row">
             <Product
                id="112"
                title="TCL 32S325 32 Inch 720p Roku Smart LED TV (2019)" 
                price = {60.99}
                image= 'https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SX355_.jpg'  
                rating ={4}    
                />
             </div> 
         </div> 
        </div>
    )
}



export default Home



