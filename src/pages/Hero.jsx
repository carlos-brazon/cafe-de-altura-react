import React from 'react'
import HeroImg from "../assets/Heroimage.png";
import ButtonLink from '../components/ButtonLink';

const Hero = () => {
    return (
            <section className="flex items-center py-12 px-10 gap-6 bg-aliceblue">
                <article className="flex flex-col gap-4">
                    <h3 className='text-green'> De la planta a tu casa</h3>
                    <h1>El mejor café del mundo, ahora en tu casa.</h1>
                    <p className='text-bluedark'>
                        Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que
                        puedas viajar desde la comodidad de tu hogar.
                    </p>
                    <div className="flex justify-start gap-4">
                        <ButtonLink text={'Descubrir orígenes'} link={'./pages/basket.html'} className={'bg-black rounded py-3 px-6 text-white text-sm font-semibold leading-4'} />
                        <ButtonLink text={'Comprar café'} link={'./pages/store.html'} className={'bg-green rounded py-3 px-6 text-white text-sm font-semibold leading-4'} />
                    </div>
                </article>
                <img src={HeroImg} alt="aquí va una imagen de un arbol de cafe" />
            </section>
    )
}

export default Hero;