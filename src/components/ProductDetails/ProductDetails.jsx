/* eslint-disable react/prop-types */
import "./ProductDetails.scss";
import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { cartContext } from "../../context/CartContextProvider";

const ProductDetails = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [cartQua, setCartQuantity] = useContext(cartContext);
  return (
    <div className="product-details my-2">
      <img src={props.curr_product.brand} className="my-2 brand-img" />
      <p className="product-description">{props.curr_product.title}</p>

      <p className="rate"> {props.curr_product.rate}</p>

      <p className="price"> {props.curr_product.price}</p>

      <h4 className="color">
        Color:<span> {props.curr_product.color}</span>
      </h4>

      <img src={props.curr_product.first_image} className="color-img" />
      <br />
      <br />

      <h4 className="color">
        Size:<span>XS</span>
      </h4>
      <div className="d-flex sizes my-2">
        <div>
          {" "}
          <button>L</button>
        </div>

        <div>
          {" "}
          <button>M</button>
        </div>
        <div>
          {" "}
          <button>S</button>
        </div>
        <div>
          {" "}
          <button>XS</button>
        </div>
      </div>

      <h4 className="color">Quantity:</h4>

      <div className="quantity">
        <button onClick={() => setQuantity(quantity + 1)}>+</button>

        <span>{quantity}</span>

        <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
          -
        </button>
      </div>

      <br />

      <div className="quantity-actions ">
        <button
          className="add-to-cart-btn"
          onClick={() => setCartQuantity(cartQua + quantity)}
        >
          Add To Cart
        </button>
        <button className="wishlist-icon-container">
          <AiOutlineHeart className="wishlist-icon" />
        </button>
        <button className="share-icon-container">
          <BsFillShareFill className="share-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
