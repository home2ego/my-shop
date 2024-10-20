import { useState, useEffect } from 'react';
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
import { AppProvider } from './components/AppContext.jsx';
import Button from './components/Button.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <BrowserRouter>
      <AppProvider>
        <Button className="btn-toggle" onClick={handleThemeClick} aria-label="Toggle theme" />

        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/about" element={<About />}></Route>

            <Route path="/products" element={<Products />}></Route>

            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="" element={<ProductDetailsInfo />}></Route>

              <Route path="nutrition" element={<ProductDetailsNutrition />}></Route>

              <Route path="storage" element={<ProductDetailsStorage />}></Route>
            </Route>

            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
