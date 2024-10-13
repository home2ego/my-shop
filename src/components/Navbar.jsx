import { NavLink } from 'react-router-dom';

function Navbar() {
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
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart (0)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
