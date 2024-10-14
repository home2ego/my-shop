import { useOutletContext } from 'react-router-dom';
import Button from '../../ui_kit/Button.jsx';

function ProductDetailsInfo() {
  const product = useOutletContext();
  const { description, price } = product;

  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>
      <Button>${price}</Button>
    </>
  );
}

export default ProductDetailsInfo;
