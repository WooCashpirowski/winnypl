import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import ProductCard from '../../components/ProductCard/ProductCard';
import { HomeStyled } from './HomeStyled';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <HomeStyled>
      {loading ? (
        <h1 className="section-header">Ładowanie ...</h1>
      ) : error ? (
        <p>{error}</p>
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
