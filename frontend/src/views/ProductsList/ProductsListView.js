import React, { useEffect, useState } from "react";
import Products from "./ProductsListStyled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import {
  listProducts,
  deleteProduct,
} from "../../redux/actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const UsersListView = ({ match, history }) => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading: loadingDel, error: errorDel, success } = useSelector(
    (state) => state.productDelete
  );

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
    if (success) {
      setMessage("Produkt usunięty");
      setTimeout(() => setMessage(""), 2000);
    }
  }, [dispatch, history, userInfo, success]);

  const handleDeleteProduct = (id) => {
    if (window.confirm("Potwierdź usunięcie produktu")) {
      dispatch(deleteProduct(id));
    }
  };

  const handleCreateProduct = () => {
    console.log("create product");
  };

  return (
    <>
      {loading || loadingDel ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Products>
          <h2 className="section-header">Produkty</h2>
          <div className="button-wrapper">
            <span></span>
            <button type="button" onClick={handleCreateProduct}>
              <div className="slide" />
              <span>
                {" "}
                <IoMdAdd /> Dodaj produkt
              </span>
            </button>
          </div>
          <div className="users-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAZWA</th>
                  <th>MARKA</th>
                  <th>CENA</th>
                  <th>KATEGORIA</th>
                  <th>PODKATEGORIA</th>
                  <th>W MAGAZYNIE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{products.indexOf(product) + 1}.</td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.price} zł</td>
                    <td>{product.category}</td>
                    <td>{product.subcategory}</td>
                    <td>
                      {product.countInStock ? (
                        `${product.countInStock} szt.`
                      ) : (
                        <IoPersonRemoveOutline />
                      )}
                    </td>

                    <td>
                      <Link to={`/admin/produkty/${product._id}/edycja`}>
                        <FiEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        <RiDeleteBin2Line style={{ color: "red" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={message ? "info" : ""}>{message}</p>
          </div>
        </Products>
      )}
    </>
  );
};

export default UsersListView;
