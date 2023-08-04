import React, { useState } from 'react'
import ArrowUp from "../assets/Chevron\ up.png";
import ArrowDown from "../assets/Chevron\ down.png";

const Pregunta = ({  question, text }) => {
    const [chevron, setChevron] = useState(true);
    return (
        <div className="question flex flex-col gap-4 bg-white p-6 rounded-[10px] w-[668px]">
            <div className={`titleicon flex flex-row justify-between border-taupe ${chevron ? 'border-b pb-4' : ''} `}>
                <h3>{question}</h3>
                <img onClick={()=> setChevron(prev=> !prev)} src={chevron ? ArrowUp:ArrowDown} alt="Aquí va una imagen de una flecha hacia arriba" />
            </div>
            <p className={`flex text-xs text-darkgrey ${chevron ? '' : 'hidden'}`}>
                {text}
            </p>
        </div>
    )
}

export default Pregunta