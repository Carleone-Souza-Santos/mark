// Cartao.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Cartao = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Pagamento por Cartão</h1>
      <FontAwesomeIcon icon={faCreditCard} className="text-6xl my-4" />
      <p>Parabéns, seu pagamento foi concluído com sucesso.</p>
    </div>
  );
};

export default Cartao;
