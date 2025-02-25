import React from 'react'
import Title from '../componets/Title'
import CartTotal from '../componets/CartTotal'

const PlaceOrder = () => {
  return (
    <div className='mt-20 flex justify-between bg-amber-950'>
      <div className='bg-amber-500'>
        <div>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='mt-10 w-[600px] flex flex-col gap-5'>
          <div className='flex  gap-4'>
            <input type="text" placeholder='First name' className='border w-1/2 rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
            <input type="text" placeholder='Last name' className='border w-1/2  rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
          <div>
            <input type="email" placeholder='Email address' className='w-full border rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
          <div>
            <input type="text" placeholder='Street' className='w-full border rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
          <div className='flex  gap-4'>
            <input type="text" placeholder='City' className='border w-1/2 rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
            <input type="text" placeholder='State' className='border w-1/2  rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
          <div className='flex  gap-4'>
            <input type="number" placeholder='Zipcode' className='border w-1/2 rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
            <input type="text" placeholder='Country' className='border w-1/2  rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
          <div>            
            <input type="number" placeholder='Phone' className='border w-full rounded-sm border-gray-300 py-2 px-5 font-bold font-poppins text-black/70' />
          </div>
        </div>
      </div>
      <div className='bg-amber-500 w-1/3'>
        <CartTotal/>
      </div>

    </div>
  )
}

export default PlaceOrder
