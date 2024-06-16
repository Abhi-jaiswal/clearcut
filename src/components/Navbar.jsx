import React from 'react'

const Navbar = () => {
  return (   
    <div className='mx-[181.63px] flex flex-col sticky top-0 z-10'>
      <div className='flex justify-between items-center py-[16px] px-[8px] pt-[32px] top-0'>

        <div className='hover:opacity-70 cursor-pointer'>
          <img src='./logo.svg' className='w-[116px] h-[31px]'/>
        </div>

        <div className='flex gap-3'>
          <a className='text-black bg-slate-200 px-[48px] py-[8px] rounded-xl mx-[8px]' href='/say-hello'>
            say hello
          </a>
          <div className='flex gap-3 items-center px-[8px] py-[4px] hover:opacity-70 cursor-pointer'>
            <div className='text-white text-xs'>
              Menu
            </div>
            <img src='./navlink.svg' className='w-6'/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
