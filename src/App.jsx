import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
// import ProductDetails from './components/product-details/ProductDetails.jsx';
// import ProductDetailsInfo from './components/product-details/ProductDetailsInfo.jsx';
// import ProductDetailsNutrition from './components/product-details/ProductDetailsNutrition.jsx';
// import ProductDetailsStorage from './components/product-details/ProductDetailsStorage.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Home />
            </div>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <div className="container">
              <About />
            </div>
          }
        ></Route>

        <Route
          path="/products"
          element={
            <div className="container">
              <Products />
            </div>
          }
        ></Route>

        {/* <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="" element={<ProductDetailsInfo />}></Route>

          <Route path="nutrition" element={<ProductDetailsNutrition />}></Route>

          <Route path="storage" element={<ProductDetailsStorage />}></Route>
        </Route> */}

        <Route
          path="/cart"
          element={
            <div className="container">
              <Cart />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
