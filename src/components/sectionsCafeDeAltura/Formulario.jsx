import React, { useState } from 'react'
import Input from '../Input';
import FormularioInfo from '../FormularioInfo';
import { Link } from 'react-router-dom';

const Formulario = () => {
    const [user, setUser] = useState({ country_code: 'US' });
    const [list, setList] = useState([])
    console.log(list);

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
        setUser(prev => ({ country_code: 'US' }));
    }
    return (
        <section className="flex px-10 gap-6 bg-taupe">
            <FormularioInfo />

            <div className="flex py-8 pr-[51px] pl-[67px] bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
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
                                    <Link className='font-semibold text-sm leading-4 text-gray' to={''}>Política de privacidad</Link>
                                    y los
                                    <Link className='font-semibold text-sm leading-4 text-gray' to={''}>Términos y condiciones</Link>
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