import React, { useContext,useState,useEffect, useRef } from 'react'
import { ShopContext } from '../context/shopContext'
import ProductItems from '../componets/ProductItems';
import Title from '../componets/Title';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";


const Collection = () => {
  const {products} = useContext(ShopContext)
  const [allProducts, setallProducts] = useState([])
  const [showCategories, setshowCategories] = useState("hidden")
  const [icon, setIcon] = useState(true)
  const ref = useRef()

  useEffect(() => {
    setallProducts(products)
    console.log(allProducts)
  }, [])

  
  const filterCategory = (e) =>{
    if(e.target.checked === true){
      const filterCategory = products.filter((item)=>{
        return item.category === e.target.value
      })
      setallProducts(filterCategory)
    }
    else{
      setallProducts(products)
    }
  } 

  const filterSubCategory = (e) =>{
    const filterSubCategory = products.filter((item)=>{
      return item.subCategory === e.target.value
    })
    setallProducts(filterSubCategory)
  } 

  const showCategoriesHandle = () =>{
        if(showCategories === 'hidden'){
          setIcon(false)
          setshowCategories('flex')
        }else{
          setIcon(true)
          setshowCategories('hidden')
        }
  }
  
  return (
    <div className=' w-full flex xl:flex-row  md:flex-col xm:flex-col sm:flex-col lg:flex-row  justify-between '>
      <div className='sm:w-full md:w-full xl:w-96 lg:w-60 flex flex-col gap-y-5 p-10 '>
        <h1 onClick={showCategoriesHandle} className='font-poppins font-bold text-gray-600 text-2xl xl:mb-8 lg:mb-8 flex items-center gap-1 '>FILTERS 
          <span className='xl:hidden lg:hidden '><GoChevronDown className={`${icon ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} />
          </span>
        </h1>
        <div className={`border w-full  border-gray-300 flex flex-col gap-5 p-5 xl:flex $ lg:flex sm:${showCategories} xm:${showCategories} md:${showCategories}`}>
          <h1 className='font-poppins text-gray-800 text-xl'>CATEGORIES</h1>
          <div className='flex flex-col gap-2   '>
            <div className='flex gap-2'>
               <input className=''onChange={filterCategory} type="checkbox" value={'Men'}  />
               <label className='font-poppins text-gray-500' htmlFor="">Men</label>
            </div>
            <div className='flex gap-2'>
              <input  onChange={filterCategory} type="checkbox" value={'Women'} />
              <label className='font-poppins text-gray-500' htmlFor="">Women</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterCategory} type="checkbox" value={'Kids'} />
              <label className='font-poppins text-gray-500' htmlFor="">Kids</label>
            </div>
          </div>
          
        </div>
        <div className={`border   border-gray-300 flex flex-col gap-5 p-5 xl:flex $ lg:flex sm:${showCategories} xm:${showCategories} md:${showCategories}`}>
          <h1 className='font-poppins text-gray-800 text-xl'>TYPE</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
               <input className='' onChange={filterSubCategory} type="checkbox" value={'Topwear'}  />
               <label className='font-poppins text-gray-500' htmlFor="">Topwear</label>
            </div>
            <div className='flex gap-2'>
              <input  onChange={filterSubCategory} type="checkbox" value={'Bottomwear'} />
              <label className='font-poppins text-gray-500' htmlFor="">Bottomwear</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterSubCategory} type="checkbox" value={'Winterwear'} />
              <label className='font-poppins text-gray-500' htmlFor="">Winterwear</label>
            </div>
          </div>
          
        </div>
      </div>

      <div className='flex flex-1 xl:flex-col lg:flex-col md:flex-col  sm:flex-col xm:flex-col w-full p-8 '>
          <div className='flex xl:flex-row lg:flex-row sm:flex-col xm:flex-col  gap-4 justify-between'>
              <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          <div className='border bg-gray-100 border-gray-300 max-w-60 h-max '>
              <select className='p-3 font-poppins ' name="" id="">
                 <option className='font-poppins' value="">Sorted by: Relavent</option>
                 <option className='font-poppins' value="">Sorted by: Low-High</option>
                 <option className='font-poppins' value="">Sorted by: Hight-Low</option>
              </select>
          </div>
          </div>
          <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-5 xm:grid-cols-1 gap-y-6 gap-4'>
            {allProducts.map((item)=>{
               return <ProductItems key={item._id} id={item._id}  name={item.name} image={item.image[0]} price={item.price} />
            })}
          </div>
          {/* <div className='mt-10'>
               <ProductItems latestProducts={allProducts}/>
          </div> */}
      </div>
      
    </div>
  )
}

export default Collection

