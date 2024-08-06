import React from 'react'
import {useParams , Link} from 'react-router-dom'
import {Button, Loading} from './index'
import { useContext } from 'react'
import { productContext } from '../utils/Utils'
import { useState } from 'react'
import { useEffect } from 'react'
function Details() {
const {id} = useParams()
const [single , setSingle] = useState(null)
const fetchingSingleProduct = async()=>{

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!response.ok){
        throw new Error ("There is problem in fetchign the data")
    }

    const data = await response.json()
    setSingle(data)
    

    } catch (error) {
        console.error("there is error" , error)
    }

    

}
    
useEffect(()=>{
    fetchingSingleProduct()
},[id])

console.log(single)
  return (
    <>

    {single ? <div className='w-[70%] h-screen flex justify-center  m-auto '>
                    <div className='flex items-center justify-evenly'>
                        <img className='w-[33%] object-contain' src={`${single.image}`} alt='product-image' />
                        

                        <div className='content  w-[50%] px-5'>
                            <h1 className='text-3xl font-bold'>{single.title}</h1>
                            <p className='text-zinc-500'>Category: {single.category}</p>
                            <p className='text-yellow-500'>Price: ${single.price}</p>
                            <p>Description:{single.description}</p>
                            
                            <div className='button-container flex gap-4 mt-6'>
                                    <Button color='text-green-700'  border='border-green-700' text='Edit' />
                                    <Button color='text-red-700' border='border-red-700' text='Delete' />
                            </div>
                        </div>
                    </div>
        </div> : <Loading/>}
         

        
    
    </>
  )
}

export default Details
