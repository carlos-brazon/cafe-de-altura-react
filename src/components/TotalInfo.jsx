import React, { useContext } from 'react'
import { replaceDot } from '../utils/util';
import { AllItemsContext } from '../context/CoffeContex';

const TotalInfo = () => {
    const { priceSubTotal, selectedValue } = useContext(AllItemsContext);
    return (
        <div className="flex flex-col justify-center gap-4">
            <h3 className='font-semibold text-lg leading-6'>Total del carrito</h3>
            <div className="bg-taupe h-px"></div>
            <div className="flex justify-between">
                <p className='font-normal text-sm leading-4'>SUBTOTAL</p>
                <span className='font-semibold text-sm leading-4'>{replaceDot(priceSubTotal)}</span>
            </div>
            <div className="flex justify-between">
                <p className='font-normal text-sm leading-4'>ENVÍO</p>
                <span className='font-semibold text-sm leading-4'>{selectedValue > 1 ? '9.00€' : 'GRATIS'}</span>
            </div>
            <div className="bg-taupe h-px"></div>
            <div className="flex justify-between">
                <p className='font-semibold text-sm leading-4'>TOTAL</p>
                <div className="flex flex-col items-end gap-2">
                    <span className='font-semibold text-sm leading-4'>{replaceDot(selectedValue && priceSubTotal ? priceSubTotal + selectedValue : priceSubTotal)}</span>
                    <p className="font-normal text-xs text-grey">Incluye <span className='font-normal text-xs text-grey'>{replaceDot(selectedValue && priceSubTotal ? (priceSubTotal + selectedValue) * 0.21 : priceSubTotal * 0.21)}</span> de IVA</p>
                </div>
            </div>
        </div>
    )
}

export default TotalInfo