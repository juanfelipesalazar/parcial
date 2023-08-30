import { useState } from 'react';

const SaludarHora = () => {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState(0);

  const cobrar = () => {
    let saludo = '';
    if (hora >= 0 && hora < 12) {
      saludo = 'Buenos días';
    } else if (hora >= 12 && hora < 18) {
      saludo = 'Buenas tardes';
    } else {
      saludo = 'Buenas noches';
    }
    console.log(`${saludo}, ${nombre}`);
  };

  return (
    <div>
      <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
      <input type="number" placeholder="Hora" onChange={(e) => setHora(e.target.value)} />
      <button onClick={cobrar}>Saludar</button>
    </div>
  );
};
export default SaludarHora;