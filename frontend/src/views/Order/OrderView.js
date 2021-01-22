import React, { useEffect } from "react";
import OrderStyled from "./OrderStyled";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/actions/orderActions";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const OrderView = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const { loading, error, order } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId]);

  if (!loading) {
    order.itemsPrice = order.orderItems
      .reduce((a, { price, qty }) => a + price * qty, 0)
      .toFixed(2);
  }

  return (
    <OrderStyled>
      {loading ? (
        <Loader />
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
                  Adres: {order.shippingAddress.address},{" "}
                  {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.city}, {order.shippingAddress.country},
                </p>
                {!order.isDelivered && (
                  <p className="warning">Nie dostarczono</p>
                )}
              </div>
              <div className="order-block">
                <h3>Metoda płatności</h3>
                <p>{order.paymentMethod}</p>
                {!order.isPaid && (
                  <p className="warning">Zamówienie nie opłacone</p>
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
            </div>
          </div>
        </>
      )}
    </OrderStyled>
  );
};

export default OrderView;
