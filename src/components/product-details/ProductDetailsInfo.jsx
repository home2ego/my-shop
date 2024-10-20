import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../Button.jsx';
import { AppContext } from '../AppContext.jsx';

function ProductDetailsInfo() {
  const product = useOutletContext();
  const { description, price } = product;

  const app = useContext(AppContext);

  console.log(app);

  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>
      <Button outline onClick={() => app.onProductAdd(product)}>
        ${price}
      </Button>
    </>
  );
}

export default ProductDetailsInfo;
