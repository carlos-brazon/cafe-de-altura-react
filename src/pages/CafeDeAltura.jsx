import React from 'react'
import Hero from '../components/sectionsCafeDeAltura/Hero';
import CardInfo from '../components/sectionsCafeDeAltura/CardInfo.jsx';
import BagsCoffe from '../components/sectionsCafeDeAltura/BagsCoffe.jsx';
import PreguntasFrecuentes from '../components/sectionsCafeDeAltura/PreguntasFrecuentes.jsx';
import CoffeBar from '../components/sectionsCafeDeAltura/CoffeBar.jsx';
import Formulario from '../components/sectionsCafeDeAltura/Formulario.jsx';
import FooterInfo from '../components/sectionsCafeDeAltura/FooterInfo.jsx';

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