import { Button } from '@mui/material'
import { Grid, TextField } from '@mui/material'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'


const LoginForm = () => {
    const dispatch  = useDispatch();
    const Navigate =  useNavigate();
  

  
    const handleSubmit = (e) =>{
         e.preventDefault();
         const data = new FormData(e.currentTarget)
         const userdata = {
             email:data.get('email'),
             password:data.get('password')
         }
         dispatch(login(userdata))
         console.log(userdata)
    }
  return (
   <>
   <div>
   <form onSubmit={handleSubmit}>
       <Grid container spacing={3}>
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
            <Button  variant='contained' size='large' type='submit' fullWidth sx={{padding:'.8rem 0',alignItems:'center',bgcolor:"#9155FD"}}>Login</Button>
         </Grid>
       </Grid>
      </form>
       <div className='flex justify-center flex-col items-center'>
          <div className='flex items-center  py-5'>
              <p>if you have already account ?</p>
              <Button onClick={()=>Navigate("/register")} className='ml-5' size='small'>Register</Button>
          </div>
         </div>
   </div>

   </>
  )
}

export default LoginForm