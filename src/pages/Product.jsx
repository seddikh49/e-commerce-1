import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/shopContext'

const Product = () => {
  const {products} = useContext(ShopContext)
  const [productId, setproductId] = useState()
  const [product, setProduct] = useState([])
  const pathname = location.pathname.split('/')

 
  useEffect(() => {
    const filterProduct = products.filter((product)=> {
      return product._id === pathname[pathname.length-1]
     })
     setProduct(filterProduct[0])
    //  console.log(product.image[0] )
  }, [product])
 
  return (
    <div>
      {
        <div>
          {/* {product.image.map((img)=>{
            return <img className=' hover:scale-105 transition-all duration-300' src={img} alt="" />
          })} */}
                <p className=' font-md pt-4 text-md font-poppins'>{product.name} </p>
                <p className='text-lg font-medium'>{product.price} </p>
        </div>
      }
    </div>
  )
}

export default Product
