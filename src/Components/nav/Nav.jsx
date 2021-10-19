import React, { useContext } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaShopify } from 'react-icons/fa'
import { ShopifyContext } from '../../Context/ShopifyContext'

export default function Nav() {
  const { Checkout, OpenCart   } = useContext(ShopifyContext)

    return (  
        <>
             <header className="p-2 shadow-sm bg-white text-coolGray-800 sticky top-0  ">
              <div className="container flex justify-between h-16 mx-auto z-50 " >
                <a href="#products" aria-label="Back to homepage" className="flex items-center p-2">
                <FaShopify  className=" p-2 text-5xl" />
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                  <li className="flex">
                    <a href="#products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent active:bg-green-700">Products</a>
                  </li>
                  <li className="flex">
                    <a href="#products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Features</a>
                  </li>
                  <li className="flex">
                    <a href="#products" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-sky-600 border-sky-600">About us</a>
                  </li>
                  <li className="flex">
                    <button className=" flex items-center px-4 mb-2 border-b-2 border-transparent  justify-center flex-col" onClick={()=> OpenCart()} ><AiOutlineShopping className=" order-2  text-xl" /> <span className=" bg-black text-xs rounded-full h-4 w-full text-green-50 " >{Checkout?.lineItems?.length}</span> </button>
                  </li>
                </ul>
                <div className="flex justify-end p-4 md:hidden">
                <button className=" flex items-center px-4   border-transparent  flex-col   -mt-2 " onClick={()=> OpenCart()} ><AiOutlineShopping className=" order-2  text-xl" /> <span className=" bg-black text-xs rounded-full h-4 w-full text-green-50   " >{Checkout?.lineItems?.length}</span> </button>
                <button >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                  
                </div>
              </div>
                    
            </header>
           
                      

                 
        </>
    )
}
