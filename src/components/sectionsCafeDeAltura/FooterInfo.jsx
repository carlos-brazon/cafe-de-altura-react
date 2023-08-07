import React from 'react'
import IconEmail from "../../assets/Mail-white.svg";
import PhoneWhite from '../../assets/Phone-white.svg';
import cupImage from '../../assets/Cup-Coffe.svg';
import ImgLink from '../ImgLink';
import { Link } from 'react-router-dom';

const FooterInfo = () => {
    return (
        <div className="flex flex-col justify-center gap-4 bg-black pt-[28.61px] pb-[37.73px] pl-10 text-white">
            <Link className="flex items-center gap-[7.33px]" to={'/'}>
                <p className=' text-2xl leading-4 font-normal'>cafedealtura.com</p>
                <img src={cupImage} alt="Aquí va una imagen de un taza" />
            </Link>

            <div className="grid grid-cols-[0.93fr,1.07fr] gap-4 items-center">
                <div className="flex flex-col gap-4 rounded">
                    <h3 className='font-semibold text-lg leading-6'>Te ayudamos en</h3>
                    <ImgLink text={'+34 919 49 05 18'}
                        urlImg={PhoneWhite}
                        className={"font-semibold bg-grey gap-2 py-3 px-6"} />

                    <ImgLink text={'hola@cafedealtura.com'}
                        urlImg={IconEmail}
                        className={"font-semibold bg-grey gap-2 py-3 px-6"} />
                </div>
                <div className="flex gap-32">
                    <ul className="flex font-semibold text-sm leading-4 flex-col justify-center items-start gap-4">
                        <li><Link className='' to={'/'}>Suscripción</Link></li>
                        <li><Link className='' to={'/'}>Para empresas</Link></li>
                        <li><Link className='' to={'/'}>Sobre nosotros</Link></li>
                        <li><Link className='' to={'/'}>Contacto</Link></li>
                        <li><Link className='' to={'store'}>Tienda</Link></li>
                    </ul>
                    <ul className="flex font-semibold text-sm leading-4 flex-col items-start gap-4">
                        <li><Link to={'/'}>Política de privacidad</Link></li>
                        <li><Link to={'/'}>Política de cookies</Link></li>
                        <li><Link to={'/'}>Términos y condiciones</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FooterInfo
