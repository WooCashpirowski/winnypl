import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProductStyled from "./EditProductStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  updateProduct,
} from "../../redux/actions/productActions";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { PRODUCT_UPDATE_RESET } from "../../redux/constants/productConstants";

const EditProductView = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [subcategory, setSubcategory] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useSelector((state) => state.productUpdate);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/produkty");
    } else {
      if (!product || productId !== product._id) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setBrand(product.brand);
        setCategory(product.category);
        setDescription(product.description);
        setFeatured(product.featured);
        setImage(product.image);
        setPrice(product.price);
        setCountInStock(product.countInStock);
        setSubcategory(product.subcategory);
      }
    }
  }, [history, dispatch, product, productId, userInfo, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        brand,
        category,
        subcategory,
        countInStock,
        description,
        image,
        featured,
      })
    );
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <>
      {loading || loadingUpdate || uploading ? (
        <Loader />
      ) : (
        <EditProductStyled>
          <h2 className="section-header">Edytuj produkt</h2>
          <Link to="/admin/produkty">Wróć</Link>
          <div className="form">
            <h4>Produkt {productId}</h4>
            <form onSubmit={handleSubmit}>
              <label>
                <p>Nazwa</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={"" || (product && product.name)}
                ></input>
              </label>
              <label>
                <p>Marka</p>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder={"" || (product && product.brand)}
                ></input>
              </label>
              <label>
                <p>Kategoria</p>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder={"" || (product && product.category)}
                ></input>
              </label>
              <label>
                <p>Podategoria</p>
                <input
                  type="text"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  placeholder={"" || (product && product.subcategory)}
                ></input>
              </label>
              <label>
                <p>Cena</p>
                <input
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="0"
                  placeholder={"0" || (product && product.price)}
                ></input>
              </label>
              <label>
                <p>Ilość</p>
                <input
                  type="number"
                  value={countInStock}
                  min="0"
                  onChange={(e) => setCountInStock(e.target.value)}
                  placeholder={"0" || (product && product.countInStock)}
                ></input>
              </label>
              <label>
                <p>Opis</p>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={"" || (product && product.description)}
                ></input>
              </label>
              <label>
                <p>Zdjęcie</p>
                <div className="add-img">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder={"" || (product && product.image)}
                  ></input>
                  <input
                    type="file"
                    placeholder="Wybierz plik"
                    onChange={handleUploadImage}
                  ></input>
                </div>
              </label>
              <label className="check">
                Wyróżnione
                <input
                  type="checkbox"
                  value={featured}
                  onChange={() => setFeatured(!featured)}
                ></input>
              </label>
              <button type="submit">
                <div className="slide" />
                <span>Zapisz</span>
              </button>
            </form>
            {error && <p className="warning">{error}</p>}
            {errorUpdate && <p className="warning">{errorUpdate}</p>}
          </div>
        </EditProductStyled>
      )}
    </>
  );
};

export default EditProductView;
