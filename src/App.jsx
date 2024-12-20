import React, { useState, useEffect } from 'react';
import './App.css'
import HeaderBar from './components/HeaderBar.jsx';
import productsData from './assets/products.json';
import ProductCard from './components/ProductCard.jsx';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => { setProducts(productsData); }, []);

  return (
    <>
      <HeaderBar />
      <div id="productList">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productImg={product.productImg}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            productAmount={product.productAmount}
            prodLink={product.prodLink}
          />
        ))}
      </div>
    </>
  );
};

export default App
