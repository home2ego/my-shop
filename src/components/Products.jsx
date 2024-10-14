import useSWR from 'swr';
import Product from './Product.jsx';
import Loader from './Loader.jsx';

function Products(props) {
  const { data: products = [], error, isLoading } = useSWR('supermarket.json');
  const { cart, onProductAdd, onProductDelete } = props;

  return (
    <div className="products-layout">
      <h1>Products</h1>
      {!isLoading && !error ? <p>Take a look at our products</p> : null}
      {error && <p>Could not load products...</p>}

      <div className="products-grid">
        {isLoading && <Loader />}
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
