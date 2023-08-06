import React from 'react'
import Card from '../components/Card';
import CardBg from "../assets/fondo2.jpg";
import CardImg1 from "../assets/Icon-card1.svg";
import CardImg2 from "../assets/icon-card2.svg";
import CardImg3 from "../assets/icon-card3.svg";

const CardInfo = () => {
    return (
        <section className={`flex flex-col gap-6 img py-12 px-36 bg-cover bg-center text-center`} style={{backgroundImage: `url(${CardBg})`}}>
            <h2 className='text-white font-medium text-2xl leading-7'>Café con las mejores condiciones</h2>
            <div className="flex flex-row justify-center items-center gap-6">
                <Card
                    url={CardImg1}
                    title={'Recibe tu pedido sin preocuparte'}
                    text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}
                />
                <Card
                    url={CardImg2}
                    title={'Envío en 24/48h'}
                    text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
                />
                <Card
                    url={CardImg3}
                    title={'Descuentos y beneficios'}
                    text={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros'}
                />
            </div>
        </section>
    )
}
export default CardInfo;