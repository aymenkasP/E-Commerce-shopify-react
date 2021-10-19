import React, { useContext } from 'react'
import { ShopifyContext } from '../../Context/ShopifyContext'

export default function CheckoutItem({product}) {
    const {removeItemFromCheckout , IsLoading } = useContext(ShopifyContext)
    console.log('Checkout'  , IsLoading)
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
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {product.quantity}</p>

                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=> removeItemFromCheckout(product.id)}>
                                       Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
        </>
    )
}
