import React, { useContext } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaShopify } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { ShopifyContext } from '../../Context/ShopifyContext'

export default function Nav() {
  const { Checkout, OpenCart   } = useContext(ShopifyContext)

    return (  
        <>
             <header className="p-2 shadow-sm bg-white text-coolGray-800 sticky top-0  ">
              <div className="container flex justify-between h-16 mx-auto z-50 " >
                <NavLink to="/"  className="flex items-center p-2">
                <FaShopify  className=" p-2 text-5xl" />
                </NavLink>
                <ul className="items-stretch  space-x-3 flex">
                  <li className="flex">
                  <NavLink to="/" activeClassName="selected" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                    Home
                  </NavLink>
                  </li>
                  <li className="flex">
                    <button className=" flex items-center px-4 mb-2 border-b-2 border-transparent  justify-center flex-col" onClick={()=> OpenCart()} ><AiOutlineShopping className=" order-2  text-xl" /> <span className=" bg-black text-xs rounded-full h-4 w-full text-green-50 " >{Checkout?.lineItems?.length}</span> </button>
                  </li>
                </ul>
               
              </div>
                    
            </header>
           
                      

                 
        </>
    )
}
