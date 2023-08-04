import React from 'react'
import { useEffect, useState } from "react";
import ArrowUp from "../assets/Chevron\ up.png";
import ArrowDown from "../assets/Chevron\ down.png";
import ArrowRigthWhite from "../assets/Arrow\ narrow\ right\ white.png";
import Pregunta from './Pregunta';

const questions = [
  {
    question: '¿Cómo hago el pedido?',
    text: 'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
  },
  {
    question: '¿Por qué los precios son tan bajos?',
    text: 'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'
  },
  {
    question: '¿Es posible enviar café a mi oficina?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus quis dignissimos in incidunt atque autem praesentium nostrum asperiores quas'
  }
]

const PreguntasFrecuentes = () => {
  // const [chevron, setChevron] = useState(true);

  return (
    <section className="section4 flex flex-col items-center py-12 bg-green gap-6">
      <h2 className='text-white'>Preguntas frecuentes</h2>
      <article className="faq flex flex-col gap-4">
        {questions.map((question, i) => <Pregunta key={i} question={question.question} text={question.text} />)}
      </article>

      <a href="">
        <div className="link2 flex flex-row items-center gap-4">
          <p className='flex font-semibold text-white underline'>Resolvemos tus dudas</p>
          <img src={ArrowRigthWhite} alt="" />
        </div>
      </a>
    </section>
  )
}

export default PreguntasFrecuentes