import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart}=useSelector((state)=> state);
  const [totalAmount,setTotalAmount]= useState(0);

  useEffect(()=> {
    //setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0));

    let amt=0;
    cart.forEach(element => {
      amt+=element.price;
    });
    setTotalAmount(amt);
    },[cart]);

  console.log(cart);

  return (
    <div className='my-10'>
      {
        cart.length>0 ? 
        (<div className='flex mx-[7rem] justify-center max-w-[1200px] gap-x-10'>

          <div className='flex flex-col w-[60%]'>
            {
              cart.map((item,index)=> 
              (<CartItem key={item.id} item={item} itemIndex={index}/>))
            }
          </div>

          <div className='flex flex-col w-[30%] justify-between'>
              <div className='flex flex-col '>
                <div className='text-green-600 text-[24px] font-semibold uppercase'>Your Cart</div>
                <div className='text-green-600 text-[50px] font-bold uppercase'>Summary</div>
                <p className='font-semibold text-lg'>
                  Total Items : <span className='font-normal'>{cart.length}</span>
                </p>
              </div>
            <div className='mb-4 '>
              <div>
                <p className='font-semibold text-xl text-gray-600'>Total Amount : <span className='text-black font-bold'>${totalAmount}</span></p>
              </div>

              <button className='text-white border-2 border-green-700 bg-green-600 rounded-md font-semibold text-[20px]
                p-2 px-[9rem] uppercase hover:bg-white hover:text-green-600 transition duration-300 ease-in mt-5'>
                Checkout
              </button>
            </div>

          </div>
        </div>
            
        ) :

        (<div className='flex justify-center items-center flex-col h-[80vh] m-6'>
          <h1 className='text-lg font-bold '>Cart Items</h1>
          <Link to='/'>
            <button className='text-lg font-semibold bg-green-600 px-10 py-2 rounded-sm mt-3'>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart