import React from 'react'
import Card from '../components/Card';
import CardBg from "../assets/fondo2.jpg";
import CardImg1 from "../assets/Icon-card1.svg";
import CardImg2 from "../assets/icon-card2.svg";
import CardImg3 from "../assets/icon-card3.svg";
const icon = `bg-[${[...CardBg]}]`

const CardInfo = () => {
    return (
        <section className={`flex flex-col gap-6 img py-12 px-36 bg-cover bg-center text-center`} style={{backgroundImage: `url(${CardBg})`}}>
            <h2 className='text-white'>Café con las mejores condiciones</h2>
            <div className="flex flex-row justify-center items-center gap-6">
                <Card
                    url={CardImg1}
                    title={'Recibe tu pedido sin preocuparte'}
                    text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}
                    className={'flex flex-col items-center justify-center p-6 gap-4 rounded-lg bg-white w-[316px] h-[232px]'}
                />
                <Card
                    url={CardImg2}
                    title={'Envío en 24/48h'}
                    text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
                    className={'flex flex-col items-center justify-center p-6 gap-4 rounded-lg bg-white w-[316px] h-[232px]'}
                />
                <Card
                    url={CardImg3}
                    title={'Descuentos y beneficios'}
                    text={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros'}
                    className={'flex flex-col items-center justify-center p-6 gap-4 rounded-lg bg-white w-[316px] h-[232px]'}
                />
            </div>
        </section>
    )
}
export default CardInfo;