import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import OrderStyled from './OrderStyled';
import { getOrderDetails, payOrder } from '../../redux/actions/orderActions';
import { ORDER_PAY_RESET } from '../../redux/constants/orderConstants';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { Link } from 'react-router-dom';

const OrderView = ({ match }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const { loading, error, order } = useSelector((state) => state.orderDetails);
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay,
  );

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=PLN`;
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.body.appendChild(script);
    };

    if (!order || order._id !== orderId || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay]);

  if (!loading) {
    order.itemsPrice = order.orderItems
      .reduce((a, { price, qty }) => a + price * qty, 0)
      .toFixed(2);
  }

  const handlePaymentSuccess = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <OrderStyled>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <h1 className="section-header">Twoje zamówienie</h1>
          <div className="order-wrapper">
            <div className="order-blocks">
              <div className="order-block">
                <h3>Dostawa</h3>
                <p>Imię: {order.user.name}</p>
                <p>Email: {order.user.email}</p>
                <p>
                  Adres: {order.shippingAddress.address},{' '}
                  {order.shippingAddress.postalCode},{' '}
                  {order.shippingAddress.city}, {order.shippingAddress.country},
                </p>
                {!order.isDelivered && (
                  <p className="warning">Nie dostarczono</p>
                )}
              </div>
              <div className="order-block">
                <h3>Metoda płatności</h3>
                <p>{order.paymentMethod}</p>
                {!order.isPaid ? (
                  <p className="warning">Zamówienie nie opłacone</p>
                ) : (
                  <p className="success">
                    Zamówienie opłacone {order.updatedAt}
                  </p>
                )}
              </div>
              <div className="order-block">
                <h3>Zamówione produkty</h3>
                {order.orderItems.map((item) => (
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
                Cena produktów <span>{order.itemsPrice} zł</span>
              </p>
              <p>
                Wysyłka <span>{order.shippingPrice} zł</span>
              </p>
              <p>
                VAT <span>23%</span>
              </p>
              <p>
                Razem <span>{order.totalPrice} zł</span>
              </p>
              {!order.isPaid && (
                <div className="button">
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={handlePaymentSuccess}
                      currency="PLN"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </OrderStyled>
  );
};

export default OrderView;
