import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Contex"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return (
    <>
      <Layout> 
      <div className='flex items-center justify-center relative w-80 mb-6 mt-2'>
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className='h-6 w-6  text-white cursor-pointer'/>
          </Link>
          <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 text-yellow-100 '>
        {
          context.order?.[index]?.products.map(product => {
            return (
              
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
              />
            )
          })
        }
      </div>
      </Layout>
    </>
  )
}

export default MyOrder