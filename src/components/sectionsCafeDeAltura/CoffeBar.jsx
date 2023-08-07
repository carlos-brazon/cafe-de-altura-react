import React from 'react'
import ImgCoffeBar from "../../assets/Coffe-bar.svg";
import ArrowRight from "../../assets/Arrow-right.svg";
import ArrowLink from '../ArrowLink';

const CoffeBar = () => {
    const linkGamma = 'https://www.google.com/maps/place/Gamma+Tech+School/@40.4373922,-3.6776844,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229deaf9deea1:0xed04d2cdcbd84b03!8m2!3d40.4373922!4d-3.6754957!16s%2Fg%2F11t18d_y50?hl=en'
    return (
        <section className="flex p-10 justify-between">
            <article className="flex flex-col justify-center ite gap-4 w-[457px]">
                <h2 className='font-medium text-2xl leading-7 text-green'> Pruébalo en nuestro coffee shop</h2>
                <p className='font-normal text-sm leading-4 text-bluedark'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu
                    pedido y llévate un descuento
                </p>

                <ArrowLink text={'Cómo llegar'}
                    textColor={'text-blackOriginal'}
                    urlImg={ArrowRight}
                    link={linkGamma} target={'_blank'} />

            </article>
            <img src={ImgCoffeBar} alt="aquí va la imagen de un bar" />
        </section>
    )
}

export default CoffeBar