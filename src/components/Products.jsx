import useSWR from 'swr';
import Product from './Product.jsx';
import Loader from './Loader.jsx';

function Products({ cart, onProductAdd, onProductDelete }) {
  const { data: products = [], error, isLoading } = useSWR('supermarket.json');

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>

      <div className="products-grid">
        {isLoading && <Loader />}
        {error && <p className="products-error">Could not load products... Please try again later.</p>}
        {products &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                details={product}
                cart={cart}
                onProductAdd={onProductAdd}
                onProductDelete={onProductDelete}
              />
            );
          })}
      </div>

      {!isLoading && !error ? <small>* click on image for more details</small> : null}
    </div>
  );
}

export default Products;
