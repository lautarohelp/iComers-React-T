import { BrowserRouter, useRoutes } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Contex'
import Home from '../home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
/* import { Clothes } from '../Clothes'
import { Electronics } from '../Electronics'
import { Furniture } from '../Furnitures'
import { Shoes } from '../Shoes'
import { Miscellaneous } from '../Miscellaneous' */


const AppRoutes = () => {
  let router = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/clothes',
      /* element: <Clothes/> */
      element: <Home/>
    },
    {
      path: '/electronics',
      /* element: <Electronics/> */
      element: <Home/>

    },
    {
      path: '/furnitures',
      /* element: <Furniture/> */
      element: <Home/>
    },
    {
      path: '/shoes',
      /* element: <Shoes/> */
      element: <Home/>
    },
    {
      path: '/others',
      /* element: <Miscellaneous/> */
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/my-orders/last',
      element: <MyOrder/>
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '*',
      element: <NotFound/>
    },
    
  ])

  return router;
}


function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
