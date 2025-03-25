import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage'
import Cart from '../customer/component/Cart/Cart'
import Navigation from '../customer/component/Navigation/Navigation'
import Footer from '../customer/component/Footer/Footer'
import Product from '../customer/component/Product/Product'
import Prodectdetail from '../customer/component/Prodectdetail/ProductDetail'
import CheckOut from '../customer/component/CheckOut/CheckOut'
import Order from '../customer/component/OrderPage/Order'
import OrderDetail from '../customer/component/OrderPage/OrderDetail'


const CustomerRoutes = () => {
  return (
    <>
    <div>
    <Navigation />
        <div>
           <Routes>
           <Route path='/login' element={<HomePage/>}></Route>
           <Route path='/register' element={<HomePage/>}></Route>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='cart' element={<Cart/>}></Route>
                <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<Prodectdetail/>}></Route>
                <Route path='/checkout' element={<CheckOut/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
            </Routes>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default CustomerRoutes