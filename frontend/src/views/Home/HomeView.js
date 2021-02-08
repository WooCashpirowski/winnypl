import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import ProductCard from "../../components/ProductCard/ProductCard";
import { HomeStyled } from "./HomeStyled";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Paginate from "../../components/Paginate/Paginate";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const Home = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const { loading, error, products, pages, page } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!keyword && <HomeCarousel products={products} />}
          <HomeStyled>
            <h1 className="section-header">Nasze Produkty</h1>
            {error && <p className="warning">{error}</p>}
            <div className="section featured">
              {products.map((product) => (
                <ProductCard product={product} key={product.name} />
              ))}
            </div>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </HomeStyled>
        </>
      )}
    </>
  );
};

export default Home;
