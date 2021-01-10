import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../products';
import { HomeStyled } from './HomeStyled';

const Home = () => {
  return (
    <HomeStyled>
      <h1 className="section-header">Polecane</h1>
      <div className="section featured">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </HomeStyled>
  );
};

export default Home;
