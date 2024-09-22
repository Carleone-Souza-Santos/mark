import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Produtos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>Nenhum produto Cadastrado !!!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
