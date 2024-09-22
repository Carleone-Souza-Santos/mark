import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
  };

  return (
    <div className="border p-4 m-4 shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-green-500 font-bold">R$ {product.price.toFixed(2)}</p>
      <button
        className={`p-2 mt-4 border-2 border-none rounded ${
          isInCart ? 'bg-green-500' : 'bg-blue-400'
        } text-white`}
        onClick={handleAddToCart}
      >
        {isInCart ? 'No carrinho' : 'Comprar'}
      </button>
    </div>
  );
};

export default ProductCard;
