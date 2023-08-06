import React from 'react'
import { Link } from 'react-router-dom'


const ArrowLink = ({ text, textColor, urlImg, link, target }) => {
    return (
        <Link className={`flex items-center gap-4 font-semibold text-sm leading-4 underline ${textColor}`} to={link} target={target}>
                {/* <p className={`flex font-semibold underline ${textColor}`}>{text}</p> */}
                {text}
                <img src={urlImg} alt="Aquí va la imagen de una flecha" />
        </Link>
    )
}

export default ArrowLink