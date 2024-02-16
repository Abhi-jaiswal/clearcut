import React from 'react'
import {FcCancel} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }


  return (
    <div className ="w-full h-full">
      <div className="flex p-12 w-[600px] gap-10 border-b-2 border-black">

        <div className="h-[200px] w-[200px] ">
          <img src={item.image} className="h-full w-full"/>
        </div>

        <div className="flex item-center flex-col">
          <h1 className ="text-gray-700 font-semibold text-lg text-left w-full mt-1">{item.title}</h1>
          <p className="w-80 font-normal text-left">{item.description.split(" ").slice(0,20).join(" ")} ...</p>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <button
            onClick={removeFromCart}>              
              <FcCancel className="text-2xl"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
