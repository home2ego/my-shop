import { useOutletContext } from 'react-router-dom';

function ProductDetailsNutrition() {
  const product = useOutletContext();
  const { protein, carbs, fat, salt } = product.nutrition;

  return (
    <table className="table table-nutrition">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Protein</td>
          <td>{protein}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{carbs}g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{fat}g</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{salt}g</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductDetailsNutrition;
