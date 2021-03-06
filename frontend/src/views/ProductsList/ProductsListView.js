import React, { useEffect, useState } from "react";
import Products from "./ProductsListStyled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../../redux/actions/productActions";
import { PRODUCT_CREATE_RESET } from "../../redux/constants/productConstants";
import Loader from "../../components/Loader/Loader";
import Paginate from "../../components/Paginate/Paginate";
import Accordion from "../../components/Accordion/Accordion";

const ProductsListView = ({ match, history }) => {
  const pageNo = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const { loading, error, products, pages, page } = useSelector(
    (state) => state.productList,
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const {
    loading: loadingDel,
    error: errorDel,
    success: successDel,
  } = useSelector((state) => state.productDelete);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: newProduct,
  } = useSelector((state) => state.productCreate);

  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/zaloguj");
    }

    if (successCreate) {
      history.push(`/admin/produkty/${newProduct._id}/edycja`);
    } else {
      dispatch(listProducts("", pageNo));
    }

    if (successDel) {
      setMessage("Produkt usunięty");
      setTimeout(() => setMessage(""), 2000);
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDel,
    successCreate,
    newProduct,
    pageNo,
  ]);

  const handleDeleteProduct = (id) => {
    if (window.confirm("Potwierdź usunięcie produktu")) {
      dispatch(deleteProduct(id));
    }
  };

  const handleCreateProduct = () => {
    dispatch(createProduct());
  };

  return (
    <>
      {loading || loadingDel || loadingCreate ? (
        <Loader />
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
                        <FcCancel />
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
            {products.map((product) => (
              <Accordion
                key={product._id}
                title={`${products.indexOf(product) + 1}. ${product.name}`}
              >
                <>
                  <Link to={`/admin/produkty/${product._id}/edycja`}>
                    <p>
                      Marka: <b>{product.brand}</b>
                    </p>
                    <p>
                      Cena: <b>{product.price} zł</b>
                    </p>
                    <p>
                      Kategoria: <b>{product.category}</b>
                    </p>
                    <p>
                      Podkategoria: <b>{product.subcategory}</b>
                    </p>
                    <p>
                      W magazynie:{" "}
                      <b>
                        {product.countInStock ? (
                          `${product.countInStock} szt.`
                        ) : (
                          <FcCancel />
                        )}
                      </b>
                    </p>
                  </Link>
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <RiDeleteBin2Line style={{ color: "red" }} />
                  </button>
                </>
              </Accordion>
            ))}
            <p className={message ? "info" : ""}>{message}</p>
            <p className={errorDel ? "warning" : ""}>{errorDel}</p>
            <p className={errorCreate ? "warning" : ""}>{errorCreate}</p>
            <p className={error ? "warning" : ""}>{error}</p>
          </div>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </Products>
      )}
    </>
  );
};

export default ProductsListView;
