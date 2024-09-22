import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, price: parseFloat(price) });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="block">Produto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label className="block">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label className="block">Valor</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
        />
      </div>
      <button className="bg-blue-500 text-white p-2 mt-4">Add Product</button>
    </form>
  );
};

export default ProductForm;
