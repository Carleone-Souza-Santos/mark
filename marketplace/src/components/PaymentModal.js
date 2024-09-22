import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faReceipt,
  faQrcode,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const PaymentModal = ({ isOpen, onRequestClose }) => {
  const handlePaymentOption = (option) => {
    switch (option) {
      case 'pix':
        window.location.href = '/qr-code';
        break;
      case 'cartao':
        window.location.href = '/pagamento-cartao';
        break;
      case 'boleto':
        window.location.href = '/pagamento-boleto';
        break;
      default:
        break;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Escolha o Método de Pagamento"
      className="max-w-lg mx-auto my-20 bg-white rounded-lg shadow-lg p-6 relative" // Adicionado relative para posicionar o botão
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-semibold mb-4">Métodos de Pagamento</h2>
      <div className="grid grid-cols-3 gap-4">
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
          onClick={() => handlePaymentOption('pix')}
        >
          <FontAwesomeIcon icon={faQrcode} className="mb-2 text-4xl" />
          <p>Pagamento por Pix</p>
        </div>
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
          onClick={() => handlePaymentOption('cartao')}
        >
          <FontAwesomeIcon icon={faCreditCard} className="mb-2 text-4xl" />
          <p>Pagamento por Cartão</p>
        </div>
        <div
          className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
          onClick={() => handlePaymentOption('boleto')}
        >
          <FontAwesomeIcon icon={faReceipt} className="mb-2 text-4xl" />
          <p>Pagamento por Boleto</p>
        </div>
      </div>
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </Modal>
  );
};

export default PaymentModal;
