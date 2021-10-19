import './App.css';
import FeatureSection from './Components/featureSection/FeatureSection';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Nav from './Components/nav/Nav';
import Reviews from './Components/NewsLetter/Reviews';
import Products from './Components/products/Products';
import CheckoutSec from './Components/Checkout/Checkout';
import { ShopifyContext } from './Context/ShopifyContext';
import { useContext } from 'react';


function App() {
	const { IsCartOpen  } = useContext(ShopifyContext)

	

  return (
    <div className="App">
		<Nav />
		{IsCartOpen && <CheckoutSec />}
		<Hero />
		<FeatureSection />
        <Products />    
		<Reviews />
		<Footer />
    </div>
  );
}

export default App;
