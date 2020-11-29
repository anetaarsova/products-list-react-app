import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    const url = `https://5fc1472ecb4d020016fe67f3.mockapi.io/products/products/?page=1&limit=10`
    let products = useAxiosGet(url)
    let content = null
    if(products.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }
    if(products.loading){
        content = <Loader></Loader>
    }
    
    if (products.data) {
        content = 
        products.data.map((product, key) => 
           <div key={product.id}>
               <ProductCard 
                 product={product}
               />
           </div>
        )
    }
    return(
        <div>
            <h1 className="font-bold text-2xl">
                Best sellers
            </h1>
             {content}
        </div>
    )
}

export default Home