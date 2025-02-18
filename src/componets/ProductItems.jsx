import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({latestProducts}) => {

    const {currency} = useContext(ShopContext)

  return (
    <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-5 gap-y-6 gap-4'>
        { latestProducts.map((products)=> {
             return(
              <Link key={products._id} to={`product/${products._id}`} className=''>
                <img className='sm:w-full hover:scale-105 transition-all duration-300' src={products.image[0]} alt="" />
                <p className=' font-md pt-4 text-md font-poppins'>{products.name} </p>
                <p className='text-lg font-bold font-poppins text-gray-700'>{currency}{products.price} </p>
              </Link>
             )
        })} 
      </div>
      
    </div>
  )
}

export default ProductItems
