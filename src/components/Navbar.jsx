import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContext.jsx';

function Navbar() {
  const app = useContext(AppContext);

  const cartCount = app.getCartCount();

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        MyShop
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
