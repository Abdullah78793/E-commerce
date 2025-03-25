import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate = useNavigate()
  return (
    <>
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 border shadow-md shadow-black border-gray-100 rounded-lg hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
            <Grid item xs={6}>
                 <div className='flex cursor-pointer'>
                    <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                    <div className='ml-4 space-y-2'>
                    <p className='font-semibold font-mono text-sm'>Men Regular Fit Solid Cut Away Collar Formal Shirt</p>
                    <p className='opacity-50  text-xs font-semibold'>Size:M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:White</p>
                 </div>
                 </div>
            </Grid>
            <Grid item xs={3}>
                <p className='font-semibold font-mono'>₹1299</p>
            </Grid>
            <Grid item xs={3}>
               
               {true &&  <div> <p>
                    <AdjustIcon sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm'/>
                    <span className='font-semibold font-mono'>
                        Delivered On March 03
                    </span>
              </p>
              <p className='text-sm font-semibold font-mono'>
                Your Item has been delivered
              </p>
               </div>}
               
                {false && <p>
                    <span>
                        Expected Delivery on Mar 03
                    </span>
                    <span>
                         Your Item is currently out for delivery
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
    </>
  )
}

export default OrderCard