import "./products.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [similarProd, setSimilarProds] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setSimilarProds(json);
      });
  }, []);

  return (
    <div className="similar-products">
      <div>
        <h2 className="similar-products-title my-3">Similar Products</h2>
        <h3 className="subtitle">You May Like This Products</h3>
        <div className="d-flex justify-content-between cards-container">
          {similarProd.map((prod) => {
            return (
              <span key={prod.id}>
                <ProductCard product={prod} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
