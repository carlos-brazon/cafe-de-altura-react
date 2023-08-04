import React from 'react'
import Header from './Header';
import Hero from './Hero';
import CardInfo from './CardInfo';
import BagsCoffe from './BagsCoffe';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import CoffeBar from './CoffeBar';
import Formulario from './Formulario';
import FooterInfo from '../components/FooterInfo';

const CafeDeAltura = () => {
  return (
    <div className='font-sans '>
    <Hero />
    <CardInfo/>
    <BagsCoffe/>
    <PreguntasFrecuentes />
    <CoffeBar/>
    <Formulario />
    <FooterInfo />  
    </div>

  )
}

export default CafeDeAltura;