import React, { useContext } from 'react'
import { ShopifyContext } from '../../Context/ShopifyContext'
import ProductCard from './ProductCard'


export default function Products() {
    const {Products} = useContext(ShopifyContext)
    console.log('products'  , Products.map(item => item.id))

    return (
        <section id="products">
        
             <div className="container mx-auto ">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight capitalize text-gray-900">our products</h2>

        <div className="mt-6 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Products?.map((product) => {
        return   <ProductCard image={product.images[0].src} title ={product.title} price={product.variants[0].price} variantsId={product.variants[0].id}  key={product.id}  />

          }
          )}
          
        </div>
      </div>
    </div>
        </section>
    )
}
