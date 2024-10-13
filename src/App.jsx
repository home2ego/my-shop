import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
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
