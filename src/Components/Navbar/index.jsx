import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Contex"
import { ShoppingCardIcon } from "../../Icons/IconsLiv"
import {  totalProduct } from "../../utils"

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(ShoppingCartContext)

  return(
  <nav className='flex bg-slate-500/60 backdrop-blur text-yellow-100  justify-between items-center  fixed top-0 z-10 w-full py-5 px-8 text-sm ' >
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
          to='/'
          onClick={() => context.setSearchByCategory('')}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/'
          onClick={() => context.setSearchByCategory('')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/clothes'
          onClick={() => context.setSearchByCategory('clothes')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/electronics'
          onClick={() => context.setSearchByCategory('Electronics')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/furnitures'
          onClick={() => context.setSearchByCategory('Furniture')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/shoes'
          onClick={() => context.setSearchByCategory('shoes')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/others'
          onClick={() => context.setSearchByCategory('others')}
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className="text-white/60">
          lauatrotoledo391@gmail.com
        </li>
        <li>
          <NavLink 
          to='/my-orders'
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
          
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/my-account'
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
          
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/sign-in'
          className={({isActive}) => isActive ? activeStyle : undefined }
          >
          
            Sign In
          </NavLink>
        </li>
        <li onClick={context.openCheckoutSideMenu} className='flex items-center cursor-pointer'>
        <ShoppingCardIcon/>
        {totalProduct(context.cartProducts)}
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}
