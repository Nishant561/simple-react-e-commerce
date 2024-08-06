import React, { useContext, useEffect } from 'react'

import {Button} from './index'
import { productContext } from '../utils/Utils'
import { Link } from 'react-router-dom'


function Nav() {

  const [product] = useContext(productContext)

  let distinct_category = product && product.reduce((acc, cv)=>[...acc , cv.category] , [])
  distinct_category = [...new Set(distinct_category)]
  
  const color = ()=>{
          return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.4)`
         
  }
  
useEffect(()=>{
  color()
},[])
  return (
    <>
        <nav className='w-[20%]  h-screen flex flex-col items-center bg-black text-white p-5'>

<Link to='/edit' className='px-2 py-3 border rounded text-white '>
Add New Product
</Link>
  


<hr className='mt-7 mb-3 w-[90%]' />

<h1 className='text-2xl w-[90%]'>
    Category Filter
</h1>

<div className='w-[90%] flex flex-col'>
  {
      distinct_category && distinct_category.map((items , index)=>(
        <Link key={index} to={`/?category=${items}`} className=' mt-3'>
        <span style={{backgroundColor: color()}} className='w-[13px] h-[13px] rounded-full inline-block bg-blue-200 mr-3 '></span>{""}
        {items}</Link>
      ))

  }
    
    

</div>



</nav>
    
    </>
  )
}

export default Nav
