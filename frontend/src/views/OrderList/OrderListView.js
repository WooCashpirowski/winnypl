import React, { useEffect } from "react";
import Orders from "./OrderListStyled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { listOrders } from "../../redux/actions/orderActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Accordion from "../../components/Accordion/Accordion";

const OrderListView = ({ history }) => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orderList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/zaloguj");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Orders>
          <h2 className="section-header">Zamówienia</h2>
          <div className="orders-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>UŻYTKOWNIK</th>
                  <th>DATA</th>
                  <th>WARTOŚĆ</th>
                  <th>PŁATNOŚĆ</th>
                  <th>DOSTAWA</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order.user.name}</td>
                    <td>{order.createdAt.split("T")[0]}</td>
                    <td>{order.totalPrice} zł</td>
                    <td>
                      {order.isPaid ? (
                        <div className="tooltip">
                          <FcCheckmark />
                          <span className="tooltip-info">
                            {order.paidAt.split("T")[0]}
                          </span>
                        </div>
                      ) : (
                        <FcCancel />
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        <div className="tooltip">
                          <FcCheckmark />
                          <span className="tooltip-info">
                            {order.deliveredAt.split("T")[0]}
                          </span>
                        </div>
                      ) : (
                        <FcCancel />
                      )}
                    </td>
                    <td>
                      <Link to={`/zamowienie/${order._id}`}>szczegóły</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {orders.map((order) => (
              <Accordion
                key={order._id}
                title={`${orders.indexOf(order) + 1}. ${order._id}`}
              >
                <Link to={`/zamowienie/${order._id}`}>
                  <p>
                    Użytkownik: <b>{order.user.name}</b>
                  </p>
                  <p>
                    Utworzone: <b>{order.createdAt.split("T")[0]}</b>
                  </p>
                  <p>
                    Wartość zamówienia: <b>{order.totalPrice} zł</b>
                  </p>

                  {order.isPaid ? (
                    <p>
                      Opłacone <b>{order.paidAt.split("T")[0]}</b>
                    </p>
                  ) : (
                    <p>
                      Nie opłacone <FcCancel />
                    </p>
                  )}

                  {order.isDelivered ? (
                    <p>
                      Dostarczone <b>{order.deliveredAt.split("T")[0]}</b>
                    </p>
                  ) : (
                    <p>
                      Nie dostarczone
                      <FcCancel />
                    </p>
                  )}
                </Link>
              </Accordion>
            ))}
          </div>
        </Orders>
      )}
    </>
  );
};

export default OrderListView;
