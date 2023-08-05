import React from 'react'
import IconEmail from "../assets/Mail-white.svg";
import PhoneWhite from '../assets/Phone-white.svg';
import cupImage from '../assets/Cup-Coffe.svg';
import ImgLink from './ImgLink';
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink';

const FooterInfo = () => {
    return (
        <div className="footerwrapper flex flex-col justify-center gap-4 bg-black pt-[28.61px] pb-[37.73px] pl-10 text-white">
            <Link className="flex items-center gap-[7.33px]" to={'/'}>
                <p className=' text-2xl leading-4 font-normal'>cafedealtura.com</p>
                <img src={cupImage} alt="Aquí va una imagen de un taza" />
            </Link>

            <div className="links grid grid-cols-[0.93fr,1.07fr] gap-4 items-center">
                <div className="flex flex-col gap-4 rounded">
                    <h3>Te ayudamos en</h3>
                    <ImgLink text={'+34 919 49 05 18'}
                        urlImg={PhoneWhite}
                        className={"bg-grey gap-2 py-3 px-6"} />

                    <ImgLink text={'hola@cafedealtura.com'}
                        urlImg={IconEmail}
                        className={"bg-grey gap-2 py-3 px-6"} />
                </div>
                <div className="linkfooter flex gap-32">
                    <ul className="flex flex-col justify-center items-start gap-4">
                        <li><a href="./pages/store.html">Tienda</a></li>
                        <li><a href="./pages/suscription.html">Suscripción</a></li>
                        <li><a href="./pages/empresas.html">Para empresas</a></li>
                        <li><a href="./pages/about.html">Sobre nosotros</a></li>
                        <li><a href="./pages/contact.html">Contacto</a></li>
                    </ul>
                    <ul className="flex flex-col items-start gap-4">
                        <li><a href="">Política de privacidad</a></li>
                        <li><a href="">Política de cookies</a></li>
                        <li><a href="">Términos y condiciones</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FooterInfo
