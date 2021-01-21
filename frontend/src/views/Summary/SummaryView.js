import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import SummaryStyled from './SummaryStyled';
import { createOrder } from '../../redux/actions/orderActions';

const SummaryView = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  cart.totalItems = cartItems
    .reduce((a, { price, qty }) => a + price * qty, 0)
    .toFixed(2);
  cart.shipping = (cart.totalItems > 200 ? 0 : 20).toFixed(2);

  cart.total = (Number(cart.totalItems) + Number(cart.shipping)).toFixed(2);

  const dispatch = useDispatch();

  const { order, success, error } = useSelector((state) => state.orderCreate);

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const handlePlaceOrder = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: cart.totalItems,
        shippingPrice: cart.shipping,
        totalPrice: cart.total,
      }),
    );
  };

  return (
    <SummaryStyled>
      <h2 className="section-header">Podsumowanie</h2>
      <CheckoutSteps step1 step2 step3 step4 />
      {}
      <div className="order-wrapper">
        <div className="order-blocks">
          <div className="order-block">
            <h4>Adres dostawy</h4>
            <p>
              {shippingAddress.address}, {shippingAddress.city},{' '}
              {shippingAddress.postalCode}, {shippingAddress.country}
              <span>
                <Link to="/dostawa">Zmień</Link>
              </span>
            </p>
          </div>
          <div className="order-block">
            <h4>Metoda płatności</h4>
            <p>
              {paymentMethod}
              <span>
                <Link to="/platnosc">Zmień</Link>
              </span>
            </p>
          </div>
          <div className="order-block">
            <h4>Wybrane produkty</h4>
            {cartItems.map((item) => (
              <div className="item-block" key={item.product}>
                <Link to={`/produkt/${item.product}`}>
                  <img src={item.image} alt={item.name} />
                  <p className="item-name">
                    {item.name}, {item.qty} szt.
                  </p>
                </Link>
                <div className="item-calc">
                  <p>{(item.qty * item.price).toFixed(2)} zł</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="summary-block">
          <h3>Podsumowanie</h3>
          <p>
            Cena produktów <span>{cart.totalItems} zł</span>
          </p>
          <p>
            Wysyłka <span>{cart.shipping} zł</span>
          </p>
          <p>
            VAT <span>23%</span>
          </p>
          <p>
            Razem <span>{cart.total} zł</span>
          </p>
          {error && <p className="warning">{error}</p>}
          <button
            type="button"
            disabled={cartItems === 0}
            onClick={handlePlaceOrder}
          >
            <div className="slide" />
            <span>Złóż zamówienie</span>
          </button>
        </div>
      </div>
    </SummaryStyled>
  );
};

export default SummaryView;
