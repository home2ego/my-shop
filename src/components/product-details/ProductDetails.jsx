function ProductDetails() {
  return (
    <div className="product-details-layout">
      <div>
        <h2>Product name here</h2>
        <img width="125" height="125" className="product-details-image" alt="product name here" />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <a className="tab-active">Details</a>
            </li>
            <li>
              <a>Nutrition</a>
            </li>
            <li>
              <a>Storage</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
