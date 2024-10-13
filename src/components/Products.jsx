import useSWR from 'swr';
import Product from './Product.jsx';

function Products() {
  const { data: products = [], error } = useSWR('supermarket.json');

  return (
    <div className="products-layout">
      <h1>Products</h1>
      {error ? <p>Could not load products...</p> : <p>Take a look at our products</p>}

      <div className="products-grid">
        {products &&
          products.map((product) => {
            return <Product key={product.id} details={product} />;
          })}
      </div>
    </div>
  );
}

export default Products;
