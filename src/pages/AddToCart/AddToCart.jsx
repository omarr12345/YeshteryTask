import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import SimilarProducts from "../../components/Products/SimilarProducts";

const currProduct = {
  title: " Adidas Designed to Move Graphic Crop Top - Black",
  rate: "No Rating Yet",
  Price: "799egp",
  first_image: "../../../src/images/first.jpg",
  sec_image: "../../../src/images/sec.jpg",
  third_image: "../../../src/images/third.jpg",
  forth_image: "../../../src/images/forth.jpg",
  brand: "../../images/adidas-2805b77d93b649829a95d869558736a2.png",
};

function AddToCart() {
  return (
    <div className="add-to-cart my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ProductSlider curr_product={currProduct} />
          </div>
          <div className="col-md-6">
            <ProductDetails curr_product={currProduct} />
          </div>
        </div>
        <SimilarProducts />
      </div>
    </div>
  );
}

export default AddToCart;
