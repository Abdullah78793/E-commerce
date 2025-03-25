import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'

import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
   <>
   <div className='lg:px-20 px:5'>
    <div>
        <h1 className='font-bold font-mono text-xl py-7'>Delivery Address</h1>
    <AddressCard/>
    <div className='py-20'>
        <OrderTraker activeStep={3} />
    </div>
    </div>
    <Grid container className='gap-5' >
        {[1,1,1].map(()=><Grid item container className='shadow-xl   rounded-md p-5 border border-gray-100 ' sx={{alignItems:'center' ,justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center'>
                    <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                    <div className='ml-5 space-y-2'>
                    <p className='text-sm font-bold font-mono'>Men Regular Fit Solid Cut Away Collar Formal Shirt</p>
                    <p className='font-semibold opacity-50 text-xs space-x-5'>Color: White      Size: M</p>
                    <p className='font-semibold font-mono  text-sm'>Seller: Faisalabad</p>
                    <p>₹1299</p>
                </div>
                </div> 
            </Grid>
            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:'2rem'}} className='mr-2'/>
                     <span className='font-semibold font-mono'>Rate & Review Product</span>
                </Box>
            </Grid>
         </Grid>)}
    </Grid>
    </div>
   </>
  )
}

export default OrderDetail