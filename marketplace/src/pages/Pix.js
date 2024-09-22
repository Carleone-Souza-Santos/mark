// Pix.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const Pix = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Pagamento por Pix</h1>
      <FontAwesomeIcon icon={faQrcode} className="text-6xl my-4" />
      <p>Parabéns, seu pagamento foi concluído com sucesso.</p>
    </div>
  );
};

export default Pix;
