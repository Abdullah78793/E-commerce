import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import Cartitem from '../Cart/Cartitem'
import { Button } from '@mui/material'


const OrderSummary = () => {
  return (
    <>
    <div>
      <div className='p-5 shadow-lg rounded-s-md border border-gray-100 '>
         <AddressCard/>
         
      </div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
            {[1,1,1].map(()=><Cartitem/>)}
            </div>
         <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
           <div className='border border-gray-100 shadow-lg'>
                  <p className='uppercase font-bold opacity-60 pb-4'>Price Detail</p>
                  <hr  />
                  <div className='space-y-1 font-semibold pb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>₹1699</span>
                    </div>  
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Discount</span>
                        <span className='text-green-800 '>-₹699</span>
                    </div>  
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Delivery Charges</span>
                        <span className='text-green-800'>Free</span>
                    </div>  
                    <div className='flex justify-between pt-3 text-black'>
                        <span className='font-bold'>Total Amount</span>
                        <span className='text-green-800 font-bold'>₹2699</span>
                    </div>  
                  </div>
                  <Button variant='contained' className='w-full' sx={{px:'2.5rem',py:'.7rem',bgcolor:'#9155fd'}}> 
                  CheckOut
                </Button>
           </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default OrderSummary