import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from '../../components/Rating/Rating';
import { ImHome } from 'react-icons/im';
import ProductStyled from './ProductStyled';

const ProductView = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);
  return (
    <ProductStyled>
      <Link to="/" className="link-btn">
        {' '}
        <ImHome /> Wróć
      </Link>
      <div className="product-wrapper">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="middle-section">
          <h1>{product.name}</h1>
          <div className="rating">
            <Rating
              value={product.rating}
              text={`${product.numReviews} ocen`}
            />
          </div>
          <h3>{product.price} zł</h3>
          <p>{product.description}</p>
        </div>
        <div className="add-to-cart-section">
          <p>
            Cena: <span>{product.price} zł</span>
          </p>
          <p>
            Status:{' '}
            <span>
              {product.countInStock > 0 ? 'W magazynie' : 'Niedostępny'}
            </span>
          </p>
          <button type="button" disabled={product.countInStock === 0}>
            <div className="slide" />
            <span>Dodaj do koszyka</span>
          </button>
        </div>
      </div>
    </ProductStyled>
  );
};

export default ProductView;
