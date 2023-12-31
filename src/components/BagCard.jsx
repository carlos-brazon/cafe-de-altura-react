import React, { useContext, useState } from 'react'
import { AllItemsContext } from '../context/CoffeContex';
import { replaceDot } from "../utils/util.js";

const BagCard = ({ objCoffe }) => {
    const { setCloud, setPriceSubTotal } = useContext(AllItemsContext)

    const handleClickAñadir = () => {
       if (objCoffe.available) {
        setPriceSubTotal(prev => prev+ objCoffe.price)
        setCloud(prev => {
            const coffe = prev.find(coffe => coffe._id == objCoffe._id)
            if (coffe) {
                coffe.quantity += 1
                return prev
            } else {
                return [...prev, { quantity: 1, ...objCoffe }];
            }
        });
       }
    }   
    return (
        <div className={`flex flex-col items-center gap-6 p-6 rounded-lg border border-taupe transition duration-200 ease-in-out hover:bg-taupe`}>
            <img className={`w-[219.39px] h-[219.39px] ${objCoffe.available ?'': 'opacity-40'}` }src={objCoffe?.img_url} alt="" />
            <div className={`flex flex-col items-center gap-3 ${objCoffe.available ?'': 'opacity-40'}`}>
                <span className='font-semibold text-sm leading-4'>{objCoffe?.brand}</span>
                <p className='font-normal text-sm leading-4'>{replaceDot(objCoffe?.price)}</p>
            </div>
            <button onClick={() => handleClickAñadir()} className="font-semibold text-sm leading-4 p-2 rounded bg-green70 text-white hover:bg-green">{objCoffe.available ?'Añadir': 'Agotado'}</button>
        </div>
    )
}

export default BagCard