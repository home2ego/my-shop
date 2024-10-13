import Button from '../ui_kit/Button.jsx';

function Product({ details }) {
  const { image, name, description, price } = details;

  return (
    <div className="product">
      <div className="product-image-container">
        <img src={image} width="100" height="100" className="product-image" alt={name} />
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
          <Button outline className="product-delete">
            x
          </Button>
        </div>
        <Button outline>${price}</Button>
      </div>
    </div>
  );
}

export default Product;
