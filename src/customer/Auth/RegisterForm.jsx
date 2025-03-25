import { Button } from '@mui/material'
import { Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { getUser, register } from '../../State/Auth/Action'


const RegisterForm = () => {
    const Navigate  = useNavigate()
    const dispatch  = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector((store)=>store)
     useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
     },[jwt, auth.jwt, dispatch])

    const handleSubmitRegister = (e) =>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const user = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }
        dispatch(register(user))
        console.log(user)
    }
  return (
    <>
    <div>
    <form onSubmit={handleSubmitRegister}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
          label="First Name"
          id='firstName'
          name='firstName'
          required
          fullWidth
          autoComplete='given-name' 
          />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextField
          label="Last Name"
          id='lastName'
          name='lastName'
          required
          fullWidth
          autoComplete='given-name' 
          />
      </Grid>
      <Grid item xs={12} >
          <TextField
          label="Email"
          id='email'
          name='email'
          required
          fullWidth
          autoComplete='given-name' 
          />
      </Grid>
      <Grid item xs={12}>
          <TextField
          label="Password"
          id='password'
          name='password'
          required
          fullWidth
          autoComplete='given-name' 
          />
      </Grid>
      <Grid item xs={12} >
         <Button  variant='contained' size='large' type='submit' fullWidth sx={{padding:'.8rem 0',alignItems:'center',bgcolor:"#9155FD"}}>Register</Button>
      </Grid>
    </Grid>
   </form>
   <div className='flex justify-center flex-col items-center'>
    <div className='flex items-center  py-5'>
        <p>if you have already account ?</p>
        <Button onClick={()=>Navigate("/login")} className='ml-5' size='small'>Login</Button>
    </div>
   </div>
    </div>
    </>
  )
}

export default RegisterForm