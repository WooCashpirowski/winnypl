import React from "react";
import Rating from "../Rating/Rating";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import ProductCardStyled from "./ProductCardStyled";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/produkt/${product._id}`}>
      <ProductCardStyled>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>
          {product.category} {product.subcategory}
        </p>
        <p className="price">{product.price} zł</p>
        <div className="add-to-cart">
          <ImCart />
        </div>
        <div className="rating">
          <Rating value={product.rating} text={`${product.numReviews} ocen`} />
        </div>
      </ProductCardStyled>
    </Link>
  );
};

export default ProductCard;
