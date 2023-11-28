
import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'



export const ShoppingCartContext = createContext();


export const ShoppingCartProvider =  ({children}) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,

  }
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //Product Detail . Show product 
  const [productToShow, setProductToShow] = useState({});
  
  //Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  
  //Shopping cart . Order
  const [order, setOrder] = useState([]);

  //Get Products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  
  
  //Get products by title 
  const [searchByTitle, setSearchByTitle] = useState(null);
  
  //Get products by category 
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items ,searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items ,searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  /* useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy( 'BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory) setFilteredItems(filterBy( 'BY_TITLE',items, searchByTitle, searchByCategory))
    if(!searchByTitle && searchByCategory) setFilteredItems(filterBy( 'BY_CATEGORY',items, searchByTitle, searchByCategory))
    if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy( null,items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory]) */

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])


  





  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      setOrder,
      order,
      items,
      setItems,
      setSearchByTitle,
      searchByTitle,
      filteredItems,
      setSearchByCategory,
      searchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

