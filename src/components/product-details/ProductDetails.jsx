import { useParams, NavLink, Outlet } from 'react-router-dom';
import useSWR from 'swr';
import Loader from '../Loader.jsx';

function ProductDetails() {
  const params = useParams();

  const { data: product = {}, isLoading } = useSWR(`productinfo/id${params.id}.json`);
  const { name, image } = product;

  return (
    <div className="product-details-layout">
      <div>
        {isLoading && <Loader />}
        <h2>{name}</h2>
        <img src={image} width="125" height="125" className="product-details-image" alt={name} />
      </div>

      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to="" end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to="nutrition">
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to="storage">
                Storage
              </NavLink>
            </li>
          </ul>
        </div>

        <Outlet context={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
