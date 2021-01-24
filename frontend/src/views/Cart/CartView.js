import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import Message from '../../components/Message/Message';
import CartStyled from './CartStyled';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const CartView = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleCheckout = () => {
    history.push('/zaloguj?redirect=dostawa');
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <CartStyled>
        {cartItems.length === 0 ? (
          <Message>
            Twój koszyk jest pusty{' '}
            <span>
              <Link to="/">Wróć do strony głównej</Link>
            </span>
          </Message>
        ) : (
          <>
            <h2 className="section-header">Twój koszyk</h2>
            <div className="cart-wrapper">
              <div className="products">
                {cartItems.map((item) => (
                  <div className="product-row" key={item.product}>
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="name">
                      <Link to={`/produkt/${item.product}`}>
                        <h4>{item.name}</h4>
                      </Link>
                    </div>
                    <div className="price">
                      <h3>{item.price} zł</h3>
                    </div>
                    <div className="qty">
                      <select
                        name="qty"
                        id="qty"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value)),
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      className="remove"
                      onClick={() => handleRemoveFromCart(item.product)}
                    >
                      <RiDeleteBin2Fill />
                    </button>
                  </div>
                ))}
              </div>
              <div className="summary">
                <h1>Podsumowanie</h1>
                <p>
                  Ilość produktów:{' '}
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </p>
                <p>
                  Łączna cena:{' '}
                  <span>
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}{' '}
                    zł
                  </span>
                </p>
                <button
                  type="button"
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                >
                  <div className="slide" />
                  <span>Dokończ zakupy</span>
                </button>
                <Link to="/">Przeglądaj dalej</Link>
              </div>
            </div>
          </>
        )}
      </CartStyled>
    </>
  );
};

export default CartView;
