import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConvertirTiempo from './componentes/ConvertirTiempo'
import PrecioLlamada from './componentes/SaludarHora'
import SaludarHora from './componentes/SaludarHora'
import CalcularCostos from './componentes/CalcularCostos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Primer Ejercicio</h2>
      <ConvertirTiempo />
      <h2>Segundo Ejercicio</h2>
      <CalcularCostos />
      <h2>Tercer Ejercicio</h2>
      <SaludarHora />


    </>
  )
}

export default App

