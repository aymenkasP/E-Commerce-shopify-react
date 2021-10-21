import React, { useContext ,useEffect,useState} from 'react'
import { ShopifyContext } from '../../Context/ShopifyContext'

export default function CheckoutItem({product}) {
  const [Quantity, setQuantity,] = useState(product.quantity)
    const {removeItemFromCheckout , IsLoading,UpdatingLineItems } = useContext(ShopifyContext)
    useEffect(() => {

    }, [Quantity,product.id])
    return (
        <>     <li className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={product.variant.image.src}
                                  alt={product.imageAlt}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.title}</a>
                                    </h3>
                                    <p className="ml-4">{product.variant.price}</p>
                                  </div>
                                </div>
                                <div className="flex justify-between  p-1 items-center m-2">
                                    <label className=" text-sm font-bold	" >
                                          Quantity
                                        </label>
                                        <input type="number" min="0" className="p-2 w-16 bg-gray-100 font-medium" value={Quantity} onChange={({target})=> setQuantity(target.value)} />
                                    </div>
                                    <button className="capitalize bg-gray-600 rounded-sm w-20 text-white  py-1 mb-1" onClick={() => UpdatingLineItems(product.id , parseInt(Quantity)) }>
                                       {IsLoading ?<p>Loading</p>:<p>update</p>} 
                                    </button>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                      
                                  <p className="text-gray-500">Qty {product.quantity}</p>
                                  <div className="flex">
                                  
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=> removeItemFromCheckout(product.id)}>
                                    {IsLoading ?<p>Loading</p>:<p>remove</p>} 

                                    </button>
                                  </div>
      
                                </div>
                              </div>
                            </li>
        </>
    )
}
