import React from 'react'
import { Link } from 'react-router-dom'


const ArrowLink = ({ text, textColor, urlImg, link, target }) => {
    return (
        <Link className="flex items-center gap-4 to={link}" to={link} target={target}>
                <p className={`flex font-semibold underline ${textColor}`}>{text}</p>
                <img src={urlImg} alt="Aquí va la imagen de una flecha" />
        </Link>
    )
}

export default ArrowLink