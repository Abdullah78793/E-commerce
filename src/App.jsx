import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes'



const App = () => {
  return (
    <>
<div>
  <Routes>
  <Route path='/*' element={<CustomerRoutes/>}></Route>
  </Routes>
<div>

 



      
</div>
    
</div>
    



    </>
  )
}
export default App
