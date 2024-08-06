import React, { useEffect, useState } from 'react'
import {Button, Loading, Nav} from './index'
import {Link, useLocation} from 'react-router-dom'
import { useContext } from 'react'
import { productContext } from '../utils/Utils'

function Home() {

    const [product ,setProduct] = useContext(productContext)

    const {search} = useLocation()
   const category = decodeURIComponent(search.split('=')[1])
   const [newProduct , setnewProduct] = useState(null)
   const filteredProduct = ()=>{
          const data = product && product.filter((items , index) => category === items.category)
          setnewProduct(data)
          
   }
   
   useEffect(()=>{

    if(!newProduct || category ==='undefined') setnewProduct(product)

    if( category != 'undefined') {
      filteredProduct()
    }


      
      
   },[category ,product])
  return (
 <>

    <Nav />
    
    

{
    newProduct? <div className='bg-zinc-600 w-[80%] h-screen overflow-x-hidden shrink-0 overflow-y-auto flex flex-wrap  p-10'>

    {
        newProduct.map((items , index)=>(
            <Link key={index} to={`/details/${items.id}`} className=' w-[23%]  h-[45vh] mr-5  mb-5 shadow-md border rounded-md flex flex-col p-5 '>
    
          <div className='w-full h-[85%] transition-all border rounded hover:scale-[1.1] bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${items.image})`}}>
    
          </div>
    
          <div className='mt-5'>
          <h1 className='leading-4 mt-3 text-white'>{items.title}</h1>
          <p className='flex w-full items-center text-yellow-300'>
            price:
            <span>${items.price}</span>
          </p>
    
          </div>
    
    </Link>
        ))
    }






    
    
    
    
    
    
    
    
    </div> : <Loading/>
}

    
    
 </>
  )
}

export default Home
