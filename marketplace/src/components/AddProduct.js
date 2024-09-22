import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddProduct = ({ addProduct, modalIsOpen, setModalIsOpen }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const closeModal = () => {
    setModalIsOpen(false);
    setProductName('');
    setProductPrice('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
    };
    addProduct(newProduct);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Adicionar Produto"
      className="max-w-lg mx-auto my-20 bg-white rounded-lg shadow-lg p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-semibold mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome do Produto:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preço do Produto:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="bg-red-500 text-white py-2 px-4 rounded ml-2 hover:bg-red-600 transition duration-200"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProduct;
