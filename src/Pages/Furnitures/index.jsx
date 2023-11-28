import { useContext } from "react"
import { ShoppingCartContext } from "../../Contex"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"

function Furniture() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
    <div className='flex items-center justify-center relative w-80 mb-4'>
      <h1 className="font-medium text-2xl">Furniture</h1>
    </div>
    <div className='flex gap-4 flex-wrap w-full max-w-screen-lg'>
      {
        context.items?.map(item => (
          item.category.name === "Furniture" && <Card data={item} key={item.id}/>))
      }
    </div>
    <ProductDetail/>
    
    </Layout>
  )
}

export {Furniture}