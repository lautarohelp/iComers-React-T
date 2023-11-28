import { useContext } from "react"
import { ShoppingCartContext } from "../../Contex"
import { GoOutIcon, ShoppingPlusIcon } from "../../Icons/IconsLiv"
import './Card.css'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (ProductDetail) => {
    context.openProductDetail();
    context.setProductToShow(ProductDetail);
    context.closeCheckoutSideMenu();
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    
  }

  const renderCheckout = (id) => {
    const isInCard =  context.cartProducts.filter(product => product.id === id).length > 0
    if (isInCard) {
      return true
    }else{
      return false
    }
  }


  const renderIcon = (id) => {
    const isInCard =  context.cartProducts.filter(product => product.id === id).length > 0
    const handleDelete = (id) => {
      const filteredProducts = context.cartProducts.filter(product => product.id != id)
      context.setCartProducts(filteredProducts)
    }
    if (isInCard) {
      return(
        <div 
          className='absolute top-20 right-24 bg-black rounded-full flex justify-center items-center duration-500'
          onClick={() => handleDelete(data.data.id)}
          >
          <GoOutIcon/>
        </div>
        
      )
    } else{
      return (
        <div 
          className='absolute top-1 right-1 bg-white rounded-full flex justify-center items-center duration-500'
          onClick={(event) => addProductsToCart(event, data.data)}
          >
            <ShoppingPlusIcon/>
        </div>
      )
    }
  }

  return (
    <div 
    className= {`${renderCheckout(data.data.id) ? 'animacion-check' : 'animacion-check-on' } cursor-pointer w-56 h-60 rounded-lg duration-500`}
    onClick={() => showProduct(data.data)}
    >
      <figure className={` relative mb-2 w-full h-4/5 `}>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className={`${renderCheckout(data.data.id) ? 'animacion-check-img' : 'animacion-check-on'} h-full w-full object-cover rounded-lg`} src={data.data.images} alt='headphones' />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between text-yellow-50'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export {Card}