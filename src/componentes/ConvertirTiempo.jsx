import { useState } from 'react';

const ConvertirTiempo = () => {
  const [segundos, setSegundos] = useState(0);

  const convertidor = () => {
    const hrs = Math.floor(segundos / 3600);
    const mins = Math.floor((segundos % 3600) / 60);
    const secs = segundos % 60;
    console.log(`Horas: ${hrs}, Minutos: ${mins}, Segundos: ${secs}`);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSegundos(e.target.value)} />
      <button onClick={convertidor}>Convertir</button>
    </div>
  );
};  
export default ConvertirTiempo;