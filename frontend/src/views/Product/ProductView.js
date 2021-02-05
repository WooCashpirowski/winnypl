import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createReview,
} from "../../redux/actions/productActions";
import { PRODUCT_REVIEW_RESET } from "../../redux/constants/productConstants";
import Rating from "../../components/Rating/Rating";
import { ImHome } from "react-icons/im";
import ProductStyled from "./ProductStyled";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Reviews from "./ReviewsStyled";

const ProductView = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;

  const dispatch = useDispatch();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const {
    loading: loadingReview,
    error: errorReview,
    success: successReview,
  } = useSelector((state) => state.productReview);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (successReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_RESET });
    }

    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successReview]);

  const addToCart = () => {
    history.push(`/koszyk/${productId}?qty=${qty}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReview(productId, {
        rating: parseInt(rating),
        comment,
      })
    );
  };

  return (
    <>
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
                    text={`Liczba ocen: ${product.numReviews}`}
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
          {loadingReview ? (
            <Loader />
          ) : (
            <Reviews>
              <h3>Opinie</h3>
              {product.reviews.length === 0 && (
                <p className="info">Brak komentarzy. Dodaj pierwszą opinię.</p>
              )}
              {product.reviews.map((review) => (
                <div className="review" key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
              <h4>Dodaj swoją opinię</h4>
              {userInfo ? (
                <form onSubmit={handleSubmit}>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">wybierz...</option>
                    <option value="1">1 - słabiutkie</option>
                    <option value="2">2 - takie sobie</option>
                    <option value="3">3 - znośne</option>
                    <option value="4">4 - dobre</option>
                    <option value="5">5 - doskonałe</option>
                  </select>
                  <label>
                    <p>Komentarz</p>
                    <textarea
                      rows="3"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </label>
                  <button type="submit" disabled={!comment}>
                    <div className="slide" />
                    <span>Dodaj opinię</span>
                  </button>
                </form>
              ) : (
                <p className="info">
                  <Link to="/zaloguj">Zaloguj się</Link> aby dodać komentarz.
                </p>
              )}
              {errorReview && <p className="warning">{errorReview}</p>}
              {successReview && (
                <p className="info">Dziękujemy za Twoją opinię</p>
              )}
            </Reviews>
          )}
        </>
      </ProductStyled>
    </>
  );
};

export default ProductView;
