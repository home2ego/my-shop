import { Link } from 'react-router-dom';
import Button from '../ui_kit/Button.jsx';

function Product(props) {
  const { onProductDelete, onProductAdd, details } = props;
  const { image, name, description, price, id } = details;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`${id}`}>
          <img src={image} width="100" height="100" className="product-image" alt={name} />
        </Link>
        <div className="product-quantity-container">
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-checkout">
        <div>
          <Button outline onClick={() => onProductDelete(id)} className="product-delete">
            x
          </Button>
        </div>
        <Button outline onClick={() => onProductAdd(details)}>
          ${price}
        </Button>
      </div>
    </div>
  );
}

export default Product;
