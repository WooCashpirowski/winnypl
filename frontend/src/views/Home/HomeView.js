import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import ProductCard from "../../components/ProductCard/ProductCard";
import { HomeStyled } from "./HomeStyled";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const Home = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <HomeStyled>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <h1 className="section-header">Polecane</h1>
          <div className="section featured">
            {products.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
        </>
      )}
    </HomeStyled>
  );
};

export default Home;
