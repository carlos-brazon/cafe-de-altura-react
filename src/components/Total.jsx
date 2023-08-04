import React, { useContext } from 'react'
import ButtonLink from './ButtonLink'
import { AllItemsContext } from '../context/CoffeContex'

const Total = ({ selectedValue }) => {
    const { priceSubTotal } = useContext(AllItemsContext);
    return (
        <div className="flex flex-col gap-4 p-6 w-[384px] h-[280px] bg-whiteOff">
            <div className="flex flex-col justify-center gap-4">
                <h3>Total del carrito</h3>
                <div className="bg-taupe h-px"></div>
                <div className="flex justify-between">
                    <p>SUBTOTAL</p>
                    <span>{priceSubTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                    <p>ENVÍO</p>
                    <span>{selectedValue>1 ? '9.00€' : 'GRATIS'}</span>
                </div>
                <div className="bg-taupe h-px"></div>
                <div className="flex justify-between">
                    <p className='font-semibold'>TOTAL</p>
                    <div className="flex flex-col items-end gap-2">
                        <span>{selectedValue>0 && priceSubTotal ? priceSubTotal+Number(selectedValue) : priceSubTotal}€</span>
                        <p className="font-normal text-grey text-xs">Incluye <span className='font-normal text-grey text-xs'>{selectedValue>0 && priceSubTotal ? ((priceSubTotal+Number(selectedValue))*0.21).toFixed(2) : (priceSubTotal*0.21).toFixed(2)  }</span>€ de IVA</p>
                    </div>
                </div>
            </div>

            <div className="buttons flex gap-4">
                <ButtonLink text={'Ir a checkout'} link={'./pages/store.html'} className={'bg-green rounded py-3 px-6 text-white text-sm font-semibold leading-4'} />
                <ButtonLink text={'Seguir comprando'} link={'store'} className={'rounded py-3 px-6 text-green text-sm font-semibold leading-4'} />
            </div>
        </div>
    )
}

export default Total