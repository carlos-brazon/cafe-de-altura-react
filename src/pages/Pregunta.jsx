import React, { useState } from 'react'
import ArrowUp from "../assets/Chevron-up.svg";
import ArrowDown from "../assets/Chevron-down.svg";

const Pregunta = ({ question, text }) => {
    const [chevron, setChevron] = useState(false);
    return (
        <div className="flex flex-col gap-4 bg-white p-6 rounded-[10px] w-[668px]">
            <div className={`flex flex-row justify-between border-taupe ${chevron ? 'border-b pb-4' : ''} `}>
                <h3 className='font-semibold text-lg leading-6'>{question}</h3>
                <img onClick={() => setChevron(prev => !prev)} src={chevron ? ArrowUp : ArrowDown} alt="Aquí va una imagen de una flecha hacia arriba" />
            </div>
            <p className={`flex font-normal text-xs leading-4 text-darkgrey ${chevron ? '' : 'hidden'}`}>
                {text}
            </p>
        </div>
    )
}

export default Pregunta