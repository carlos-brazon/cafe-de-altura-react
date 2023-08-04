import React from 'react'
import ImgCoffeBar from "../assets/coffebar.png";
import ArrowRight from "../assets/Arrow narrow right (1).png";

const CoffeBar = () => {
    return (
        <section className="section1 flex p-10 justify-between">
            <article className=" article1 flex flex-col justify-center ite gap-4 w-[457px]">
                <h2 className='text-green'> Pruébalo en nuestro coffee shop</h2>
                <p className='py-1 text-bluedark'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu
                    pedido y llévate un descuento
                </p>
                <a href="https://www.google.com/maps/place/Gamma+Tech+School/@40.4373922,-3.6776844,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229deaf9deea1:0xed04d2cdcbd84b03!8m2!3d40.4373922!4d-3.6754957!16s%2Fg%2F11t18d_y50?hl=en"
                    target="_blank">
                    <div className="link flex gap-4">
                        <p className='py-1 text-black'>Como llegar</p>
                        <img src={ArrowRight} alt="" />
                    </div>
                </a>
            </article>
            <img src={ImgCoffeBar} alt="aquí va la imagen de un bar" />
        </section>
    )
}

export default CoffeBar