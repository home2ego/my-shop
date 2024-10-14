import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import ProductDetails from './components/product-details/ProductDetails.jsx';
import ProductDetailsInfo from './components/product-details/ProductDetailsInfo.jsx';
import ProductDetailsNutrition from './components/product-details/ProductDetailsNutrition.jsx';
import ProductDetailsStorage from './components/product-details/ProductDetailsStorage.jsx';
import Cart from './components/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find((product) => product.id === newProduct.id);

    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route
            path="/products"
            element={<Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />}
          ></Route>

          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailsInfo onProductAdd={handleProductAdd} />}></Route>

            <Route path="nutrition" element={<ProductDetailsNutrition />}></Route>

            <Route path="storage" element={<ProductDetailsStorage />}></Route>
          </Route>

          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
