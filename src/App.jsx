import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import CoffeContex from './context/CoffeContex';
import CafeDeAltura from './pages/CafeDeAltura';
import Header from './pages/Header';
import Hero from './pages/Hero';
import  Store  from './pages/Store';
import Basket from './pages/Basket';


function App() {

  return (
    <div className='font-outfit font-normal pt-[68px] w-[1280px]'>

      <CoffeContex>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<CafeDeAltura />} />
              <Route path='store' element={<Store />} />
              <Route path='basket' element={<Basket />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CoffeContex>
    </div>
  )
}
export default App;