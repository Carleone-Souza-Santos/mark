// Boleto.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

const Boleto = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Pagamento por Boleto</h1>
      <FontAwesomeIcon icon={faReceipt} className="text-6xl my-4" />
      <p>
        Parabéns, seu pagamento foi concluído aguarde ate 3 dias para conclusão.
      </p>
    </div>
  );
};

export default Boleto;
