import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'

const Product = () => {
  const { products } = useContext(ShopContext)

  const [product, setProduct] = useState()
  const [changeSize, setChangeSize] = useState('');

  const [image, setImage] = useState();
  const { productId } = useParams();

  const productData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProduct(item)
        setImage(item.image[0])
      }
    })
  }

  useEffect(() => {
    productData()
  }, [product, productId]);



  return product && (
    <div>
      <div className='h-max flex gap-15 xl:flex-row xm:flex-col sm:flex-col'>
        <div className='xl:w-auto md:w-full sm:h-[50vh] xm:h-[50vh] md:h-[60vh] xl:h-[70vh] xl:gap-7 xm:gap-1 sm:gap-2 flex'>
          <div className=' h-full justify-between flex flex-col  items-center'>
            {product.image.map((img, index) => {
              return (
                <img onClick={() => setImage(img)} key={index} className='h-[24%] object-cover' src={img} alt="" />
              )
            })}
          </div>
          <div className='h-full '>
            <img className=' sm:w-full md:w-full h-full  object-cover' src={image} alt="" />
          </div>
        </div>
        <div className='xm:gap-5 flex flex-col sm:gap-10 xl:justify-between '>
          <div>
            <h1 className='text-4xl font-[400] font-poppins'>{product.name} </h1>
          </div>
          <div className='flex'>
            <img className='text-amber-200' src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img className='pr-2' src={assets.star_dull_icon} alt="" />
            <span className='font-[500]'>(122)</span>
          </div>
          <p className='text-3xl font-[600] font-poppins'>${product.price} </p>
          <p className='w-96 font-[500] font-poppin text-gray-800'>{product.description} </p>
          <h1 className='text-xl'>Select Size</h1>
          <div className='flex gap-2  '>
            {product.sizes.map((size, index) => {
              return <button
                onClick={() => setChangeSize(index)}
                key={index}
                className={`bg-gray-200  font-poppins font-[400] text-xl cursor-pointer rounded-md px-4 py-2 ${changeSize === index ? 'border-2 border-orange-200' : 'border-2 border-orange-200/0 '} `}>{size}</button>
            })}
          </div>
          <div>
        <button className=' px-5 py-3 text-xl bg-black font-poppins font-[400] active:bg-black/80 text-amber-50'>ADD TO CART</button>
        </div>

        </div>

      </div>

    </div>

  )
}

export default Product


// <div className='py-12 border-t-2 flex lg:flex-col bg-blue-700 h-[70vh] md:flex-col sm:flex-col gap-10 xl:flex-row items-center border-gray-200 w-full  '>
//   <div className='flex xl:w-4/9 gap-4   justify-between   sm:w-full    '>
//     <div className='flex flex-col justify-between h-auto gap-2   sm:w-[20%]  a-max  xl:w-[15%]    '>
{/* {product.image.map((img, index) => {
            return (
              <img onClick={() => setImage(img)} key={index} className='w-full' src={img} alt="" />
            )
          })} */}
{/* </div>
        <div className='h-auto w-[90%]'>
          <img className=' xl:w-3/4 sm:w-full h-auto  object-cover' src={image} alt="" />
        </div>
      </div>
      <div className='p-5 flex flex-col gap-6  '>
        <div><h1 className='text-4xl font-[400] font-poppins'>{product.name} </h1></div> */}
{/* <div className='flex'>
          <img className='text-amber-200' src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img className='pr-2' src={assets.star_dull_icon} alt="" />
          <span className='font-[500]'>(122)</span>
        </div> */}
{/* <p className='text-3xl font-[600] font-poppins'>${product.price} </p>
        <p className='w-96 font-[500] font-poppin text-gray-800'>{product.description} </p>
        <h1 className='text-xl'>Select Size</h1>
        <div className='flex gap-2  '> */}
{/* {product.sizes.map((size, index) => {
            return <button
              onClick={() => setChangeSize(index)}
              key={index}
              className={`bg-gray-200  font-poppins font-[400] text-xl cursor-pointer rounded-md px-4 py-2 ${changeSize === index ? 'border-2 border-orange-200' : 'border-2 border-orange-200/0 '} `}>{size}</button>
          })} */}

{/* </div>
        <div>
        <button className=' px-5 py-3 text-xl bg-black font-poppins font-[400] active:bg-black/80 text-amber-50'>ADD TO CART</button>
        </div>
      </div> */}



// </div>