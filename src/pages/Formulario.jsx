import React, { useState } from 'react'
import ImgLink from '../components/ImgLink'
import IconePhoneForm from "../assets/Phone-gray.svg";
import IconEmail from "../assets/Mail-gray.svg";
import Input from '../components/Input';

const Formulario = () => {
    const [user, setUser] = useState({country_code:'US'});
    const [list, setList] = useState([])
    console.log(user);
    console.log(list);
    // const handleInput = () => {
    //     const inputName = event.target.name;
    //     const inputValue = (event.target.value)
    //     setUser(prev => ({ ...prev, [inputName]: inputValue }));
    // }
    const handleInput = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
      
        if (inputName === 'email') {    
          const cleanedValue = inputValue.replace(/[^a-zA-Z0-9@.\-_]/g, '');
          setUser((prev) => ({ ...prev, [inputName]: cleanedValue }));
        } 
        else {
          setUser((prev) => ({ ...prev, [inputName]: inputValue }));
        }
      };
      
      


    const handleSubmit = async () => {
        event.preventDefault();
        setList(prev => [{ ...user, name: user.name?.toLowerCase() }]);
        setUser(prev => ({country_code:'US'}));
    }


    return (
        <section className="flex px-10 gap-6 bg-taupe">
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

            <div className="flex py-8 pr-[51px] pl-[67px] bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start gap-6">
                        <Input labelText={'Nombre completo'}
                            type={'text'}
                            name={'name'}
                            id={'name1'}
                            onChange={handleInput}
                            value={(user.name)?.replace(/[^a-zA-Z\s]/g, '') || ''} 
                            />

                        <Input labelText={'Email'}
                            type={'text'}
                            name={'email'}
                            id={'email1'}
                            onChange={handleInput}
                            value={user.email || ''} 
                            />

                        <Input labelText={'Teléfono'}
                            type={'tel'}
                            name={'phone'}
                            id={'phone1'}
                            onChange={handleInput}
                            value={(user.phone)?.replace(/[^0-9]/g, '') || ''}
                            pattern={'[0-9]{1}-[0-9]{(3)}-[0-9]{3}'}
                            select={true}
                            valueSelect={user.country_code || ''}
                            />

                        <div className="flex flex-col">
                            <label className='text-white' htmlFor={user.name || ''}>.</label>
                            <textarea 
                                id={'textarea'}
                                onChange={handleInput}
                                name={'comentary'}
                                value={user.comentary || ''}
                                placeholder="¿En qué podemos ayudarte?"
                                className='w-[470px] h-[122px] py-[13px] px-[17px] rounded-md border border-blueligth hover:border-blueMedLigth focus:outline-2 outline-greenMed' 
                            ></textarea>
                        </div>

                        <div className="flex gap-3">
                            <input required className='w-4 h-4 rounded border-0 border-blueligth file:hover:border-blueMedLigth accent-green' type="checkbox" id="checkbox" name="" />
                            <label htmlFor="terminoscondiciones">
                                <p className='font-normal text-sm leading-4 text-gray'>Acepto la
                                    <a className='font-semibold text-sm leading-4 text-gray' href="">Política de privacidad</a>
                                    y los
                                    <a className='font-semibold text-sm leading-4 text-gray' href="">Términos y condiciones</a>
                                </p>
                            </label>
                        </div>
                        <input className='py-3 px-6 bg-green rounded text-white' type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Formulario