import React, { useContext } from 'react'
import cupImage from '../assets/cup.png';
import IconTelf from '../assets/Icon.png';
import Carrito from '../assets/Carr.png';
import ButtonLink from '../components/ButtonLink';
import { Link, Outlet } from 'react-router-dom'
import CopyRigthFotter from '../components/CopyRigthFotter';
import { AllItemsContext } from '../context/CoffeContex';

const Header = () => {
    const {counterHeader} = useContext(AllItemsContext);
    return (
        <>
            <header className="flex items-center justify-between py-[14px] fixed top-0 z-10 px-10 bg-darkgrey text-white">
                <Link to={'/'}>
                    <div className="flex items-center justify-center gap-[7.33px]">
                        <p className=' text-2xl leading-4 font-normal'>cafedealtura.com</p>
                        <img src={cupImage} alt="Aquí va una imagen de un taza" />
                    </div>
                </Link>
                <nav>
                    <ul className="flex gap-4">
                        <li><Link to={'Store'}><a className='p-2 hover:bg-blackTransparent rounded-lg' href=''>Tienda</a></Link></li>
                        <li><a className='p-2 hover:bg-blackTransparent rounded-lg' href="./pages/suscription.html">Suscripción</a></li>
                        <li><a className='p-2 hover:bg-blackTransparent rounded-lg' href="./pages/empresas.html">Para empresas</a></li>
                        <li><a className='p-2 hover:bg-blackTransparent rounded-lg' href="./pages/about.html">Sobre nosotros</a></li>
                        <li><a className='p-2 hover:bg-blackTransparent rounded-lg' href="./pages/contact.html">Contacto</a></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-6">
                    <a href=""><div className="flex items-center gap-2">
                        <img src={IconTelf} alt="" />
                        <p className='flex font-semibold'>+34 919 49 05 18</p>
                    </div></a>
                    <ButtonLink text={'Iniciar sesión'} className={'py-3 px-6 rounded bg-grey text-white text-sm font-semibold leading-4'} />
                </div>

                <Link className={'flex gap-2'} to={'basket'}>
                    <img src={Carrito} alt="Aquí va la imagen de una cesta" />
                    <p className=" flex bg-blackTransparent text-white items-center justify-center rounded-full w-6 h-6">{counterHeader}</p>
                </Link>

            </header>
            <Outlet />
            <CopyRigthFotter />
        </>
    )
}

export default Header;