import React from 'react'
import ImgLink from './ImgLink';    
import IconePhoneForm from "../assets/Phone-gray.svg";
import IconEmail from "../assets/Mail-gray.svg";

const FormularioInfo = () => {
    return (
        <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">
                <h3 className='font-semibold text-lg leading-6 text-bluedark'>Entra en contacto con nosotros</h3>
                <p className='font-normal text-sm leading-4 text-gray'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo
                    antes posible.</p>
            </div>
            <div className="flex flex-col gap-6">
                <p className='font-normal text-sm leading-4 text-gray'>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la
                    tienda.</p>
                <div className="address">
                    <p className='font-normal text-sm leading-4 text-gray'>742 Evergreen Terrace</p>
                    <p className='font-normal text-sm leading-4 text-gray'>Springfield, OR 12345</p>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <ImgLink text={'+1 (555) 123-4567'}
                        className={'gap-3'}
                        urlImg={IconePhoneForm}
                        classNameText={'font-normal text-sm leading-4 text-gray'} />

                    <ImgLink text={'support@example.com'}
                        className={'gap-3'}
                        urlImg={IconEmail}
                        classNameText={'font-normal text-sm leading-4 text-gray'} />
                </div>
                <p className='font-normal text-sm leading-4 text-gray'>¿Buscas un trabajo? <a className='font-semibold text-sm leading-4 text-gray' href=""> Ver nuestras ofertas.</a></p>
            </div>
        </div>
    )
}

export default FormularioInfo