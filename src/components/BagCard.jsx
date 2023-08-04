import React, { useContext, useState } from 'react'
import { AllItemsContext } from '../context/CoffeContex';
import { replaceDot } from "../utils/util.js";
const BagCard = ({ objCoffe }) => {
    const { setCloud, setPriceSubTotal } = useContext(AllItemsContext)

    const handleClick = () => {
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
    return (
        <div className="flex flex-col items-center gap-6 p-6 rounded-lg border border-taupe hover:bg-taupe ">
            <img src={objCoffe?.img_url} alt="" />
            <div className="flex flex-col items-center gap-3">
                <a href="">{objCoffe?.brand}</a>
                <p>{replaceDot(objCoffe?.price)}</p>
            </div>
            <button onClick={() => handleClick()} className="p-2 rounded bg-green70 text-white hover:bg-green">Añadir</button>
        </div>
    )
}

export default BagCard