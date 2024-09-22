import React from 'react';
import ProductForm from '../components/ProductForm';

const ProductPage = ({ addProduct }) => {
  return <ProductForm addProduct={addProduct} />;
};

export default ProductPage;
