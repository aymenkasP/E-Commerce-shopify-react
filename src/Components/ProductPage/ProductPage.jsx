import React, {useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ShopifyContext } from '../../Context/ShopifyContext'
import parse from 'html-react-parser';
      

export default function ProductPage() {

    const {fetchProductWithId , Product,addItemToCheckout,IsLoading} = useContext(ShopifyContext)
    const [Quantity, setQuantity,] = useState(1)

    const {id} = useParams()
    useEffect(() => {
            fetchProductWithId(id)

    }, [id])// eslint-disable-line react-hooks/exhaustive-deps
   
    return (
        <>
         <div className="container px-5 py-24 mx-auto h-full">
    <div className="lg:w-4/5 mx-auto flex flex-wrap  justify-around	">
      <img alt="ecommerce" loading="lazy"  className="lg:w-1/2 lg:h-4/6 w-full max-w-sm  bg-cover mt-12  object-center rounded border border-gray-200 "  src={Product.images?.[0].src} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-left text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font text-left font-medium mb-1">{Product.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
         
        </div>
        <div className="leading-relaxed">{parse(`${Product.descriptionHtml}`)}</div>
        <div className="border-b-2 border-gray-200">
        <div className="flex justify-evenly p-10 items-center">
                <label className=" text-sm font-bold	" >
                      Quantity
                    </label>
                    <input type="number" min="0" className="w-20 p-3 bg-gray-100 font-medium" value={Quantity} onChange={({target})=> setQuantity(target.value)} />
        </div>
          
        </div>
        <div className="">
          <span className="title-font font-medium text-2xl text-gray-900">{Product?.variants?.[0].price} {Product.variants?.[0].presentmentPrices?.[0].price.currencyCode}  </span>
          <button
                
                className="mt-10 w-full capitalize bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={()=> addItemToCheckout(Product.variants[0].id,parseInt(Quantity))}
              >
                {IsLoading? <p>loading</p> : <p>Add to bag</p>}
              </button>
        </div>
      </div>
    </div>
  </div>
          
        </>
    )
}
