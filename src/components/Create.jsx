import React, { useContext, useState } from 'react';
import Button from './Button';
import { productContext } from '../utils/Utils';

function Create() {
  const [product, setProduct] = useContext(productContext);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
  const formHandler = (e) => {
    e.preventDefault();
    
    // Create a new product object
    const newProduct = {
      image,
      title,
      category,
      price,
      description
    };
    
    // Update the product state with the new product
    setProduct((prevProduct) => {
      const updatedProduct = [...prevProduct, newProduct];
      
      // Update localStorage with the new product array
      localStorage.setItem('product', JSON.stringify(updatedProduct));
      
      return updatedProduct;
    });
  };

  return (
    <div className='w-[80%] h-screen  m-auto flex justify-center items-center '>
      <form onSubmit={formHandler} className='w-[80%] flex bg-zinc-400 py-10 flex-col items-center gap-2 h-[80%] '>
        <h1 className='text-2xl font-semibold '>Add New Product</h1>
        
        <input 
          type='url'
          placeholder='Image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='w-[65%] rounded p-2 text-2xl'
        />
        
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-[65%] rounded p-2 text-2xl'
        />

        <div className='w-[65%] flex justify-between'>
          <input
            type='text'
            placeholder='Category'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='w-[48%] rounded p-2 text-2xl'
          />
          <input
            type='number'
            value={price}
            placeholder='Price'
            onChange={(e) => setPrice(e.target.value)}
            className='w-[48%] rounded p-2 text-2xl'
          />
        </div>
        
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-[65%] rounded p-2 text-2xl'
          placeholder='Enter your Product Descriptions..'
        />

        <button type='submit' className='px-2 py-3 hover:bg-green-500 transition-all hover:text-white border text-xl border-green-800 rounded text-green-800 '>
          Add New Product
        </button>
      </form>
    </div>
  );
}

export default Create;
