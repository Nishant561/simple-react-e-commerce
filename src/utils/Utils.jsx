import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'


export const productContext = createContext()



function Utils(props) {

    

    const [product , setProduct] = useState(null)


    

    const data = async()=>{

        
         try {
            
             const response = await fetch ('https://fakestoreapi.com/products')

             if(!response.ok){
                 throw new Error ("Network response was not ok")
             }
            
             const data = await response.json()
             setProduct(data)
           

         } catch (error) {
             console.error('Fetching Error', error)
         }
    }

    useEffect(()=>{
         data()

         

       
    },[])


  return (
    <productContext.Provider value={[product , setProduct]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Utils
