import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Resultados from '../pages/Resultados'
import Checkout from '../pages/Checkout'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resultados" element={<Resultados/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  )
}
