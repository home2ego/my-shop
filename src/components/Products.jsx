import useSWR from 'swr';
import Product from './Product.jsx';
import Loader from './Loader.jsx';

function Products() {
  const { data: products = [], error, isLoading } = useSWR('supermarket.json');

  return (
    <div className="products-layout">
      <h1>Products</h1>
      {!isLoading && !error ? <p>Take a look at our products</p> : null}
      {error && <p>Could not load products...</p>}

      <div className="products-grid">
        {isLoading && <Loader />}
        {products &&
          products.map((product) => {
            return <Product key={product.id} details={product} />;
          })}
      </div>

      {!isLoading && !error ? <small>* click on image for more details</small> : null}
    </div>
  );
}

export default Products;
