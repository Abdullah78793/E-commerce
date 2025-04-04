import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

 const Footer = () => {
  return (
    <div>
       <Grid className='bg-black text-white text-center mt-10'
       container
       sx={{bgcolor:'black' ,color:'white',py:3}}
       >
          <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h5'>
                Company
               </Typography>
               <div> 
                <Button className='pb-5' variant='h6' >
                About
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom >
                Blog
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Jobs
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Press
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Partners
               </Button>
               </div>
              
              
               
              
             
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h5'>
                Solutions
               </Typography>
               <div> 
                <Button className='pb-5' variant='h6' >
                Marketing
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom >
                Analytics
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Commerce
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Insights
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Support
               </Button>
               </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h5'>
                Documentation
               </Typography>
               <div> 
                <Button className='pb-5' variant='h6' >
                Guides
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom >
                API Status
               </Button>
               </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h6'>
                Legal
               </Typography>
               <div> 
                <Button className='pb-5' variant='h6' >
                Claim
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom >
                Privacy
               </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom>
                Terms
               </Button>
               </div>
          </Grid>
          <Grid item xs={12} className='pt-20'>
               <Typography variant='body2' component='p' align='center'>
                &copy; 2025 All rights reserved. www.poput.com
               </Typography>
               <div> 
               <Typography  variant='body2'component='p' align='center'>
               Made with love by POPUT DON.
               </Typography>
               {/* <Typography variant='body2' component='p' align='center'>
               Icons made by {''}
                <Link href='https://www.freepik.com/' color='inherit' underline='always'>Freepik</Link> {''}
                from {''}
                <Link href='https://www.flaticon.com/' color='inherit' underline='always'>www.flaticon.com</Link>
               </Typography> */}
               </div>
          </Grid>
       </Grid>
    </div>
  )
}
export default Footer
