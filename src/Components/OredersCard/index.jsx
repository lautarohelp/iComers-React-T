

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types'

const OrdersCard = props => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
    /* tengo q poner por las props y tener cuidado */

  }

  const { totalPrice, totalProducts } = props;

  return(
    <div className='flex justify-between items-center  border  border-blue-50 w-80 rounded-lg p-4 mb-4'>
      <div className='flex justify-between  w-full'>
        <p className='flex flex-col'> 
          <span className='font-light'>27.11.23</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 cursor-pointer'/>
        </p>
      </div>
    </div>
  )
}

export {OrdersCard}