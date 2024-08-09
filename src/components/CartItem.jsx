import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
      <div className='flex items-center border-b-2 border-b-black w-[95%] h-[14rem] mt-10 pb-14 my-5 px-5' >
        <div className='w-[25%] h-[100%] p-3'>
          <img src={item.image} className='scale-125 w-full h-full' />
        </div>
        <div className='ml-10 w-[20rem] flex flex-col gap-y-5'>
          <h1 className='text-gray-900 font-semibold text-lg text-left w-[100%] mt-1'>{item.title}</h1>
          <p className=' font-normal text-sm text-left'>{item.description.split(" ").slice(0,15).join(" ")}...</p>
          <div className='flex justify-between gap-x-11'>
            <p className='text-green-600 font-bold  '>${item.price}</p>
            <div onClick={removeFromCart} className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
              <MdDelete />
            </div>
          </div>
        </div>
      </div>

  )
}

export default CartItem