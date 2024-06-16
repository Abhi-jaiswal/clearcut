import React from 'react'
import TopLevel from '../components/TopLevel';
import FormDiv from '../components/FormDiv';

const SayHello = () => {
  return (
    <div className='bg-white flex flex-col items-center'>
      <TopLevel/>
      <FormDiv/>
    </div>
  )
}

export default SayHello;
