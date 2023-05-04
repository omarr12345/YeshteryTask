/* eslint-disable react/prop-types */
import "./productscard.scss";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="img-cont h-50">
        <img src={props.product.image} />
      </div>
      <p className="fw-bold prod-title">{props.product.title}</p>

      <div className="d-flex justify-content-between align-items-center my-3">
        <h4 className="price">{props.product.price} EGP</h4>
        <img
          src="../../images/adidas-2805b77d93b649829a95d869558736a2.png"
          className="img-fluid product-brand-img"
        />
      </div>
      <p className="rate text-center">No Rating Yet</p>
    </div>
  );
};

export default ProductCard;
