import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../redux/actions/productActions";
import Rating from "../../components/Rating/Rating";
import { ImHome } from "react-icons/im";
import ProductStyled from "./ProductStyled";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const ProductView = ({ match, history }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <ProductStyled>
      <Link to="/" className="link-btn">
        {" "}
        <ImHome /> Wróć
      </Link>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
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
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "W magazynie" : "Niedostępny"}
                </span>
              </p>
              {product.countInStock > 0 && (
                <p>
                  Ilość:{" "}
                  <span>
                    <select
                      name="qty"
                      id="qty"
                      value={qty}
                      onChange={({ target }) => setQty(target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </span>
                </p>
              )}

              <button
                type="button"
                disabled={product.countInStock === 0}
                onClick={addToCart}
              >
                <div className="slide" />
                <span>Dodaj do koszyka</span>
              </button>
            </div>
          </div>
        )}
      </>
    </ProductStyled>
  );
};

export default ProductView;
