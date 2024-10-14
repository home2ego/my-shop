import { useOutletContext } from 'react-router-dom';
import Button from '../Button.jsx';

function ProductDetailsInfo({ onProductAdd }) {
  const product = useOutletContext();
  const { description, price } = product;

  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>
      <Button outline onClick={() => onProductAdd(product)}>
        ${price}
      </Button>
    </>
  );
}

export default ProductDetailsInfo;
