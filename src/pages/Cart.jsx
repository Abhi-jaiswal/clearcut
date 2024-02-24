import React from 'react'
import { useSelector } from 'react-redux'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom' 
import CartItem from '../components/CartItem';
import "./cart.css"


const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce((acc,item) => acc + item.price,0));
  },[cart]);

  return (
    <div className='h-full w-full'>
  {
    cart.length > 0 ? 
    (
      <div className="flex flex-col sm:min-h-[70vh] relative">

          {/* cart items list  */}
          <div className="grid xl:w-6/12 space-y-10 xl:absolute xl:top-0 xl:left-40 xl:h-[80vh] overflow-scroll example mx-auto">
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} className="w-full p-10"/>   
              })
            }
          </div>

          {/*  cart summary */}
          <div className="flex flex-col min-h-[80vh] xl:absolute bottom-0 top-0 right-20 px-25 xl:w-4/12 w-full px-auto">

              <div className="flex flex-col">
                <div className="text-green-700 ">Your Cart</div>
                <div className="text-green-700 font-bold text-[40px]">Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>
            
              <div className="flex flex-col absolute bottom-0">
                <p>Total Amount: <span className="font-bold"> ${totalAmount}</span></p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Checkout Now</button>
              </div>
            
          </div>  

      </div>
      
    ):
    (<div className="flex flex-col items-center justify-center align-items-center h-screen gap-5">
      <h1>Cart is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>
    )
  }

    </div>
  );
};

export default Cart