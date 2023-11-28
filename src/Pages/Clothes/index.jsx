import { useContext } from "react"
import { ShoppingCartContext } from "../../Contex"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"

function Clothes() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
    <div className='flex items-center justify-center relative w-80 mb-4'>
      <h1 className="font-medium text-2xl">Clothes</h1>
    </div>
    <div className='flex gap-4 flex-wrap w-full max-w-screen-lg'>
      {
        context.items?.map(item => (
          console.log(item.category.name),
          item.category.name === "Clothes" && <Card data={item} key={item.id}/>))
      }
    </div>
    <ProductDetail/>
    
    </Layout>
  )
}

export {Clothes}