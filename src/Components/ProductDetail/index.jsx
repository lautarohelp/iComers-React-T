import { useContext } from 'react'
import { GoOutIcon } from '../../Icons/IconsLiv'
import { ShoppingCartContext } from '../../Contex'
import './ProductDetails.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside 
    className={`${context.isProductDetailOpen ? 'translate-x-0' : 'translate-x-full'}  text-yellow-100 duration-300 product-detail flex  flex-col fixed right-0 border border-gray rounded-lg bg-black`}>
      <div className='flex justify-between items-center p-6'>
      <h2 className='font-medium text-xl'>Detail</h2>
      <div  onClick={() => context.closeProductDetail()}>
      <GoOutIcon />
      </div>
      </div>
      <figure className='px-6 max-h-64'>
        <img className='w-full h-full rounded-lg' src={context.productToShow.images} alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail}
