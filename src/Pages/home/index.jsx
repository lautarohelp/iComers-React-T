import { useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Contex";


function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map(item => (
          <Card data={item} key={item.id}/>
        ))
      }else {
      return <div>Not Found</div>
      }
    
  }

  return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className="font-medium text-2xl">Exclusive Products</h1>
        </div>
        <input 
        type="text" 
        placeholder="Search a product" 
        className='rounded-lg border border-white bg-neutral-800 w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        
        <div className='flex gap-4 flex-wrap w-full max-w-screen-lg'>
        {
          renderView()
        }
        </div>
        <ProductDetail/>
      </Layout>
  )
}

export default Home