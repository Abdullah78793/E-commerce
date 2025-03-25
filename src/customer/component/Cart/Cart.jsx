import React from 'react'
import Cartitem from './Cartitem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const handleAddtocheckOut = () =>{
      navigate("/checkOut?step=2")
  }
  return (
    <>
    <div>
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
                  <Button onClick={handleAddtocheckOut} variant='contained' className='w-full' sx={{px:'2.5rem',py:'.7rem',bgcolor:'#9155fd'}}> 
                  CheckOut
                </Button>
           </div>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Cart