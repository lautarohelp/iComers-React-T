import { useContext } from 'react'
import { GoOutIcon } from '../../Icons/IconsLiv'
import { ShoppingCartContext } from '../../Contex'
import './Style.css'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'



const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '27.11.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }


  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} checkout-side-menu  text-yellow-100 duration-300  flex  flex-col fixed right-0 border border-gray rounded-lg bg-black`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div  onClick={() => context.closeCheckoutSideMenu()}>
        <GoOutIcon />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map(product => {
          return (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title} 
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
            />
          )
        })
      }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        {
          context.cartProducts.length === 0 && 
          <button className='w-full bg-white/25 py-3 text-yellow-50 rounded-lg' onClick={() => (
            context.closeCheckoutSideMenu()
            )}>Close menu</button>
        }
        {
          context.cartProducts.length !== 0 && 
          <Link to='/my-orders/last'>
            <button className='w-full bg-white/25 py-3 text-yellow-50 rounded-lg' onClick={() => (
              handleCheckout(),
              context.closeCheckoutSideMenu()
              )}>Checkout</button>
        </Link>
        }
        
      </div>
      
    </aside>
  )
}

export {CheckoutSideMenu}
