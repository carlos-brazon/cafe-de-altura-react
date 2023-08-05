import React, { useContext } from 'react'
import cupImage from '../assets/Cup-Coffe.svg';
import PhoneWhite from '../assets/Phone-white.svg';
import Carrito from '../assets/Icon-basket.svg';
import ButtonLink from '../components/ButtonLink';
import { Link, Outlet } from 'react-router-dom'
import CopyRigthFotter from '../components/CopyRigthFotter';
import { AllItemsContext } from '../context/CoffeContex';
import ImgLink from '../components/ImgLink';

const Header = () => {
    const { counterHeader } = useContext(AllItemsContext);
    return (
        <>
            <header className="flex items-center justify-between py-[14px] fixed top-0 z-10 px-10 bg-darkgrey text-white w-[1280px]">
                <Link className="flex items-center gap-[7.33px]" to={'/'}>
                    <p className=' text-2xl leading-4 font-normal'>cafedealtura.com</p>
                    <img src={cupImage} alt="Aquí va una imagen de un taza" />
                </Link>
                <nav>
                    <ul className="flex gap-4">
                        <li><Link to={'Store'} className='p-2 hover:bg-blackTransparent rounded-lg' >Tienda</Link></li>
                        <li><Link to={'Store'} className='p-2 hover:bg-blackTransparent rounded-lg' >Suscripción</Link></li>
                        <li><Link to={'Store'} className='p-2 hover:bg-blackTransparent rounded-lg' >Para empresas</Link></li>
                        <li><Link to={'Store'} className='p-2 hover:bg-blackTransparent rounded-lg' >Sobre nosotros</Link></li>
                        <li><Link to={'Store'} className='p-2 hover:bg-blackTransparent rounded-lg' >Contacto</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-6">
                    <ImgLink text={'+34 919 49 05 18'}
                        urlImg={PhoneWhite}
                        className={'gap-2'} />

                    <ButtonLink text={'Iniciar sesión'}
                        className={'bg-grey text-white '} />
                </div>

                <ImgLink text={counterHeader}
                    urlImg={Carrito}
                    className={'gap-2'}
                    link={'basket'}
                    classNameText={'flex bg-blackTransparent text-white items-center justify-center rounded-full w-6 h-6'} />

            </header>
            <Outlet />
            <CopyRigthFotter />
        </>
    )
}

export default Header;