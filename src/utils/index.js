/* 
*
* @param {Array} products cartProducts Array of Objects
* @returns {numer} Total price
*/

export const totalPrice = (products) => {
  let sum  = 0;
  products.forEach(product => sum += product.price)
  return sum;
}
export const totalProduct = (products) => {
  let sum  = 0;
  products.forEach(() => sum += 1)
  return sum;
}