
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const Cartitem = () => {
  return (
    <>
    <div className='p-5 shadow-lg border rounded-md border-gray-100'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'> 
                 <img className='w-full h-full object-cover object-top'  src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70" alt="" />
            </div>
            <div className='ml-5 space-y-2'>
                   <p className='text-md text-black font-semibold'>Women Bodycon Yellow Dress</p>
                   <p className='opacity-50 text-gray-500'>Size:L,Yellow</p>
                   <p className='opacity-50 text-gray-500'>Seller:Aarvia</p>
                   <div className='flex items-center space-x-3 mt-5'>
                     <p className='line-through text-sm font-bold opacity-40'>₹1999</p>
                     <p className='text-sm font-bold text-black'>₹699</p>
                     <p className='text-sm font-bold text-green-600'>72% off</p>
                   </div>
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
             <div className='flex items-center space-x-2'>
                <IconButton>
                     <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border border-gray-100 rounded-sm'>1</span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <AddCircleOutlineIcon/>
                </IconButton>
             </div>
             <div>
                <Button  sx={{color:"RGB(145 85 253)"}}>Remove</Button>
             </div>
        </div>
    </div>
    </>
  )
}

export default Cartitem