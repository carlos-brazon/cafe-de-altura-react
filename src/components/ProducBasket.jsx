import React, { useContext, useState } from 'react'
import Less from "../assets/menos.svg";
import More from "../assets/mas.svg";
import { AllItemsContext } from '../context/CoffeContex';
import { replaceDot } from "../utils/util";

const ProducBasket = ({ objCoffe: { brand, img_url, price, quantity, _id } }) => {
    const { setCloud, setPriceSubTotal } = useContext(AllItemsContext)
    const more = (boolean) => {
        boolean ? setPriceSubTotal(prev => prev + price) : setPriceSubTotal(prev => prev - price)
        setCloud(prev => {
            const holdPrev = [...prev]
            const coffe = holdPrev.find(coffe => coffe._id == _id);
            if (coffe && boolean) {
                coffe.quantity += 1
                return holdPrev
            }
            else {
                coffe.quantity -= 1
                return coffe.quantity == 0 ? holdPrev.filter(objCoffe => coffe._id !== objCoffe._id) : holdPrev
            }
        });
    }

    return (
        <>
            <div className="coffebag flex  items-center gap-6">
                <div className="basket-counter flex items-center gap-2">
                    <img onClick={() => more(false)} src={Less} alt="Aquí va la imagen de un menos" />
                    <p className="flex items-center justify-center rounded-full text-green bg-greentransparen w-6 h-6" >{quantity}</p>
                    <img onClick={() => more(true)} src={More} alt="" />
                </div>
                <div className="basket-coffebag">
                    <img className='w-[55.66px] h-[55.66px]' src={img_url} alt="" />
                </div>
                <div className="basket-details flex flex-col gap-1 w-[506.34px]">
                    <span className='font-semibold text-sm leading-4'>{brand}</span>
                    <p className='font-normal text-sm leading-4'>Paquete de café, 250 gr</p>
                </div>
                <h3 className='font-semibold text-lg leading-6 w-24 text-end'>{replaceDot(price * quantity)}</h3>
            </div>
            <div className='bg-taupe h-px last:hidden'></div>
        </>
    )
}

export default ProducBasket
{/* <div className="coffebag flex  items-center gap-6">
                <div className="basket-counter flex items-center gap-2">
                    <img onClick={() => more(false)} src={Less} alt="Aquí va la imagen de un menos" />
                    <p className="flex items-center justify-center rounded-full text-green bg-greentransparen w-6 h-6" >{quantity}</p>
                    <img onClick={() => more(true)} src={More} alt="" />
                </div>
                <div className="basket-coffebag">
                    <img className='w-[55.66px] h-[55.66px]' src={img_url} alt="" />
                </div>
                <div className="basket-details flex flex-col gap-1 w-[506.34px]">
                    <span className='font-semibold text-sm leading-4'>{brand}</span>
                    <p className='font-normal text-sm leading-4'>Paquete de café, 250 gr</p>
                </div>
                <h3 className='font-semibold text-lg leading-6'>{replaceDot(price * quantity)}</h3>
            </div>
            <div className='bg-taupe h-px last:hidden'></div> */}