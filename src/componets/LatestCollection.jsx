import React from 'react'
import { ShopContext } from '../context/shopContext';
import { useContext,useEffect,useState } from 'react';
import Title from './Title.jsx';
import ProductItems from './ProductItems.jsx';

const LatestCollection = () => {
    const {products}= useContext(ShopContext);
    const [latestProducts, setlatestProducts] = useState([])
    useEffect(() => {
      setlatestProducts(products.slice(0,10))
    }, [])
    
  
  return (
    <div className='my-10'>
      <div className=' text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        <p className='text-gray-400 font-poppins text-lg text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti, lorem inpoks istam clotes.
           </p>
      </div>
      <div>   
          <ProductItems latestProducts={latestProducts} />
      </div>
    </div>
  )
}

export default LatestCollection

