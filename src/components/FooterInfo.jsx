import React from 'react'
import IconEmail from "../assets/Mail-white.png";
import IconPhone from "../assets/Icon.png";
import cup from "../assets/cup.png";
import ImgLink from './ImgLink';

const FooterInfo = () => {
    return (
            <div className="footerwrapper flex flex-col justify-center gap-4 bg-black pt-[28.61px] pb-[37.73px] pl-10 text-white">
                <a className='flex gap-[7.33px] items-center' href="">
                            <p className='text-[23.46px] font-normal leading-[35.19px]'>cafedealtura.com</p>
                        <img src={cup} alt="" />
                </a>

                <div className="links grid items-center">
                    <div className="contacwrapper flex flex-col gap-4 rounded">
                        <h3>Te ayudamos en</h3>
                        <ImgLink text={'+34 919 49 05 18'}
                            urlImg={IconPhone}
                            className={"flex items-center gap-2 bg-grey py-3 px-6 rounded"} />
                        <ImgLink text={'hola@cafedealtura.com'}
                            urlImg={IconEmail}
                            className={"flex items-center gap-2 bg-grey py-3 px-6 rounded"} />
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
