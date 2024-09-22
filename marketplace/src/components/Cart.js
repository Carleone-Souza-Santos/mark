import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const Cart = ({ cart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p className="text-lg">O carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="flex-1">
                  {item.name} - {item.quantity} x R$ {item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full ml-4"
                  aria-label="Remover produto do carrinho"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-bold">Total: R$ {calculateTotal()}</h2>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white p-2 rounded mt-2"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
      <PaymentModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
