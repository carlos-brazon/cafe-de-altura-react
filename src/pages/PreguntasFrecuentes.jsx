import React from 'react'
import ArrowRigthWhite from "../assets/Arrow-right-white.svg";
import Pregunta from './Pregunta';
import ArrowLink from '../components/ArrowLink';

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

  return (
    <section className="section4 flex flex-col items-center py-12 bg-green gap-6">
      <h2 className='text-white'>Preguntas frecuentes</h2>
      <article className="faq flex flex-col gap-4">
        {questions.map((question, i) => <Pregunta key={i} question={question.question} text={question.text} />)}
      </article>
      <ArrowLink text={'Resolvemos tus dudas'}
        textColor={'text-white'}
        urlImg={ArrowRigthWhite}
        link={'store'} />
    </section>
  )
}

export default PreguntasFrecuentes