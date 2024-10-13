import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
