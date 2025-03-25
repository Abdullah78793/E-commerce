import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const OrderTraker = ({activeStep}) => {
    const step =[
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out For Delivery ",
        "Delivered"
    ]
  return (
    <>
    <div className='w-full'>
        <Stepper activeStep={activeStep}>
          {step.map((label)=><Step>
            <StepLabel sx={{color:'#9155FD',fontSize:'44px'}} >{label}</StepLabel>
          </Step>)}
        </Stepper>
    </div>
    </>
  )
}

export default OrderTraker