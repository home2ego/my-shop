import { useEffect, useState } from 'react';
import Product from './Product.jsx';
import useFetch from '../hooks/useFetch.jsx';
import Loader from './Loader.jsx';

function Products() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get('supermarket.json')
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
