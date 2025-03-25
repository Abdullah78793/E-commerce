import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import { Button } from '@mui/material'


const DeliveryAddressForm = () => {
     const handleSubmitForm = (e) =>{
          e.preventDefault()
          const data = new FormData(e.currentTarget)
          const address = {
               fisrtName:data.get("firsttName"),
               lastName:data.get("lastName"),
               streetaddress:data.get("address"),
               city:data.get("city"),
               state:data.get("state"),
               postalcode:data.get("zip"),
               phonenumber:data.get('phonenumber')

          }
          console.log("Address",address)
     }
     return (
          <>
               <div>
                    <Grid container spacing={4}>
                         <Grid xs={12} lg={5} className='border border-gray-100 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                              <div className='p-5 py-7 border-b border-gray-100 cursor-pointer '>
                                   <AddressCard />
                                   <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                              </div>
                         </Grid>
                         <Grid item xs={12} lg={7}>
                              <Box className='border border-gray-100 rounded-md shadow-md p-5 '>
                                   <form onSubmit={handleSubmitForm}>
                         <Grid container spacing={3}>
                                             <Grid item xs={12} sm={6} >
                                                  <TextField
                                                       required
                                                       id='firstName'
                                                       name='firstName'
                                                       type='text'
                                                       fullWidth
                                                       label='First Name'
                                                       autoComplete='given-name'


                                                  />


                                             </Grid>
                                             <Grid item xs={12} sm={6} >
                                                  <TextField
                                                       required
                                                       id='lastName'
                                                       name='lastName'
                                                       type='text'
                                                       fullWidth
                                                       label='Last Name'
                                                       autoComplete='given-name'


                                                  />
                                             </Grid>
                                             <Grid item xs={12}  >
                                            <TextField
                                            required 
                                            id='address'
                                            name='address'
                                            label='Address'
                                            multiline
                                            fullWidth
                                            rows={4}
                                            />
                                  </Grid>
                                  <Grid item xs={12} lg={6} >
                                            <TextField
                                            required 
                                            id='city'
                                            name='city'
                                            label='City'
                                            multiline
                                            autoComplete='given-name'
                                            fullWidth
                                            />
                                  </Grid>
                                  <Grid item xs={12} lg={6} >
                                            <TextField
                                            required 
                                            id='state'
                                            name='state'
                                            label='State/Province/Region'
                                            multiline
                                            autoComplete='given-name'
                                            fullWidth
                                            />
                                  </Grid>
                                  <Grid item xs={12} lg={6} >
                                            <TextField
                                            required 
                                            id='zip'
                                            name='zip'
                                            label='Zip / Postal Code'
                                            multiline
                                            autoComplete='shipping postal-code'
                                            fullWidth
                                           
                                            />
                                  </Grid>
                                  <Grid item xs={12} lg={6} >
                                            <TextField
                                            required 
                                            id='phonenumber'
                                            name='phonenumber'
                                            label='Phone Number'
                                            multiline
                                            autoComplete=''
                                            fullWidth
                                           
                                            />
                                  </Grid>
                                  <Grid item xs={12} lg={6} >
                                         <Button type='submit' variant='contained' sx={{py:1.5,mt:2,bgcolor:'RGB(145 85 253)'}} size='large'>Deliver Here</Button>
                                  </Grid>
                                        </Grid>
                                   </form>
                              </Box>
                         </Grid>
                    </Grid>
               </div>
          </>
     )
}

export default DeliveryAddressForm