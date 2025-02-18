import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import { Link } from 'react-router-dom'
import ProductItems from './ProductItems'

const BestSellers = () => {
    const {products} = useContext(ShopContext)
    const [bestSellers, setbestSellers] = useState([])
  
    useEffect(() => {
      const bestFilter = products.filter((item)=>{
        return item.bestseller === true
      })
      setbestSellers(bestFilter.slice(0,5))
    }, [])


  return (
    <div>
        <div className='text-center text-3xl '>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='text-gray-400 font-poppins text-lg text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti, lorem inpoks istam clotes.
           </p>
        </div>
        <div>
        <div className='mt-10'>   
          <ProductItems latestProducts={bestSellers} />
      </div>
        
    </div>
    </div>
  )
}

export default BestSellers
