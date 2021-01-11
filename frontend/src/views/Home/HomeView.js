import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { HomeStyled } from './HomeStyled';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
