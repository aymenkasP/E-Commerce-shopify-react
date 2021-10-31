import { createContext, useEffect, useState } from 'react';
import Client from 'shopify-buy';


// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain:process.env.REACT_SHOPIFY_DOMAIN,
  storefrontAccessToken:process.env.REACT_SHOPIFY_TOKEN
});


const ShopifyContext = createContext();

 function ShopifyProvider({children}) {

        const [Products, setProducts] = useState([])
        const [Product, setProduct] = useState({})
        const [Checkout, setCheckout] = useState({})
        const [IsCartOpen, setIsCartOpen] = useState(false)
        const [IsLoading, setIsLoading] = useState(true)


   useEffect(() => {
         setIsLoading(true)
       client.product.fetchAll().then((products) => {
        // Do something with the products
        setProducts(products) });

        
        if (localStorage.checkout) {
          fetchCheckout(localStorage.checkout);
        } else {
          createCheckout();
        }
        setIsLoading(false)
   }, [])



  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    setCheckout(checkout);
  };

  const  fetchCheckout =  (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((err) => console.log(err));
  };
   

  function addItemToCheckout (variantId, quantity){
    setIsLoading(true)
    const lineItemsToAdd = [
        {
          variantId: variantId,
          quantity:quantity,
        }
      ];

      client.checkout.addLineItems(Checkout.id, lineItemsToAdd).then((checkout) => {
        // Do something with the updated checkout
        setCheckout(checkout)
        setIsLoading(false)
        OpenCart()
      });
      
  }

 function UpdatingLineItems(id, quantity){
  setIsLoading(true)

const lineItemsToUpdate = [ {id,quantity }];

  // Update the line item on the checkout (change the quantity or variant)
client.checkout.updateLineItems(Checkout.id, lineItemsToUpdate).then((checkout) => {
  // Do something with the updated checkout
  setCheckout(checkout) 
  setIsLoading(false)

});

 }




  const removeItemFromCheckout  = (productId) => {
    setIsLoading(true)
    // Remove an item from the checkout
    client.checkout.removeLineItems(Checkout.id, productId).then((checkout) => {
      setCheckout(checkout) 
      setIsLoading(false)
    });
    
  }





    const  fetchProductWithId =  (id) => {
      setIsLoading(true)
        client.product.fetch(id).then((product) => {
           setProduct(product); 
           setIsLoading(false)
        });
       
      };

      const OpenCart = () => {
        setIsCartOpen(true);
      }
      const CloseCart = () => {
        setIsCartOpen(false);
      }

      return (
        <ShopifyContext.Provider
          value={{Products,Checkout,fetchProductWithId,Product ,addItemToCheckout,UpdatingLineItems,removeItemFromCheckout, IsCartOpen ,OpenCart,CloseCart,IsLoading}}
        >
          {children}
        </ShopifyContext.Provider>
      );
}


const ShopConsumer = ShopifyContext.Consumer;
export { ShopConsumer, ShopifyContext };

export default ShopifyProvider;