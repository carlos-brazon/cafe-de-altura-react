import React from 'react'
import ImgLink from '../components/ImgLink'
import IconePhoneForm from "../assets/Phone.contac.png";
import IconEmail from "../assets/Mail.png";

const Formulario = () => {
    return (
        <section className="split flex">
            <div className="contac flex">
                <div className="titulo flex">
                    <h3>Entra en contacto con nosotros</h3>
                    <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo
                        antes posible.</p>
                </div>
                <div className="direction flex">
                    <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la
                        tienda.</p>
                    <div className="address">
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ImgLink text={'+1 (555) 123-4567'}
                            className={'flex items-center gap-3'}
                            urlImg={IconePhoneForm}
                            weight={'font-normal'} x />

                        <ImgLink text={'support@example.com'}
                            className={'flex items-center gap-3 font'}
                            urlImg={IconEmail}
                            weight={'font-normal'} />
                    </div>
                    <p>¿Buscas un trabajo? <a href=""> Ver nuestras ofertas.</a></p>
                </div>
            </div>

            <div className="formulario flex">
                <form action="#">
                    <div className="general flex">
                        <div className="nombre flex">
                            <label htmlFor="name" className="flex">Nombre completo</label>
                            <input type="text" name="name" id="name" className="flex" />

                        </div>
                        <div className="nombre flex">
                            <label htmlFor="email" className="flex">Email</label>
                            <input type="text" name="email" id="email" />

                        </div>

                        <div className="nombre flex">
                            <label htmlFor="mobile" className="flex">Teléfono</label>
                            <div className="selectnumber flex">
                                <select id="country-code">
                                    <option value="US">US</option>
                                    <option value="SP">SP</option>
                                </select>
                                <input type="tel" id="mobile" name="mobile" placeholder="+1 (555) 987-6543" />
                            </div>
                        </div>

                        <div className="coment flex">
                            {/* <label htmlFor="comment" style="visibility: hidden">.</label> */}
                            <label htmlFor="comment">.</label>
                            <textarea id="comment" name="comment" required
                                placeholder="¿En qué podemos ayudarte?"></textarea>
                        </div>

                        <div className="check flex">
                            <input type="checkbox" id="checkbox" name="" />
                            <label htmlFor="terminoscondiciones">
                                <p>Acepto la <a href="">Política de privacidad</a> y los <a href="">Términos y
                                    condiciones</a></p>
                            </label>
                        </div>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Formulario