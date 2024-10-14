import { Link } from 'react-router-dom';
import Button from '../ui_kit/Button.jsx';

function Product(props) {
  const { onProductDelete, onProductAdd, cart, details } = props;
  const { image, name, description, price, id } = details;

  const productFromCart = cart.find((product) => product.id === id);
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`${id}`}>
          <img src={image} width="100" height="100" className="product-image" alt={name} />
        </Link>
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button outline onClick={() => onProductDelete(id)} className="product-delete">
              x
            </Button>
          )}
        </div>
        <Button outline onClick={() => onProductAdd(details)}>
          ${price}
        </Button>
      </div>
    </div>
  );
}

export default Product;
