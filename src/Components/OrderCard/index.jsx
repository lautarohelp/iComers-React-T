
import { GoOutIcon } from "../../Icons/IconsLiv"
import PropTypes from 'prop-types'

const OrderCard = ({ id,title, imageUrl, price, handleDelete }) => {
  console.log({id, title, imageUrl, price, handleDelete});
  OrderCard.propTypes = {
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    handleDelete: PropTypes.func,
    /* tengo q poner por las props y tener cuidado */

  }

  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <span onClick={() => handleDelete(id)} ><GoOutIcon /> </span>
  }
  return(
    <div className='flex justify-between items-center mb-2'>
      <div className='flex  items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export {OrderCard}