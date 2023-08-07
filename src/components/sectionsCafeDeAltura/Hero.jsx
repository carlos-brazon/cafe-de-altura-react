import React from 'react'
import HeroImg from "../../assets/Hero-image.svg"
import ButtonLink from '../ButtonLink';

const Hero = () => {
    return (
        <section className="flex items-center py-12 px-10 gap-6 bg-aliceblue">
            <article className="flex flex-col gap-4">
                <h3 className='font-semibold text-lg leading-6 text-green'> De la planta a tu casa</h3>
                <h1 className='font-semibold text-[40px] leading-[44px]'>El mejor café del mundo, ahora en tu casa.</h1>
                <p className='font-normal text-sm leading-4 text-bluedark'>
                    Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que
                    puedas viajar desde la comodidad de tu hogar.
                </p>
                <div className="flex justify-start gap-4">
                    <ButtonLink text={'Descubrir orígenes'} link={'/'} className={'bg-black text-white py-3 px-6'} />
                    <ButtonLink text={'Comprar café'} link={'store'} className={'bg-green text-white py-3 px-6'} />
                </div>
            </article>
            <img src={HeroImg} alt="aquí va una imagen de un arbol de cafe" />
        </section>
    )
}

export default Hero;