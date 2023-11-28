import PropTypes from 'prop-types'

const Layout = (  {children}  ) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,

  }

  
  return (
    <div className='flex flex-col items-center mt-20 text-yellow-100 text-xl'>
      {children}
    </div>
  )
}

export {Layout}