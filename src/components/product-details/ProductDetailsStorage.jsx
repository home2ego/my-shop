import { useOutletContext } from 'react-router-dom';

function ProductDetailsStorage() {
  const storage = useOutletContext().storage;

  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}

export default ProductDetailsStorage;
