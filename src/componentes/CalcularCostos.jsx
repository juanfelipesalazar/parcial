import { useState } from 'react';

const CalcularCostos = () => {
  const [minutos, setMinutos] = useState(0);

  const calcular = () => {
    let costo = 0;
    if (minutos <= 3) {
      costo = 100;
    } else {
      costo = 100 + (minutos - 3) * 50;
    }
    console.log(`Costo total: ${costo} pesos`);
  };

  return (
    <div>
      <input type="number" onChange={(e) => setMinutos(e.target.value)} />
      <button onClick={calcular}>Calcular</button>
    </div>
  );
};
export default CalcularCostos;