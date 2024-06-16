import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/Slices/NameSlice'

const FormDiv = () => {
    const NameData = useSelector(state => state.Name.NameData);
    const dispatch = useDispatch();

    const setName = (e) => {
        console.log(NameData);
        dispatch(update(e.target.value));
        console.log(NameData);
    }
  return (
    <div>
      <form className='flex flex-col mt-[48px]'>
        <label>Enter Your Name</label>
        <input type="text" className='p-3 outline' value={NameData} placeholder="Enter Name" onChange={(e) => setName(e)}/>
      </form>
    </div>
  )
}

export default FormDiv
