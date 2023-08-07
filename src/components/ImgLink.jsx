import React from 'react'
import { Link } from 'react-router-dom'

const ImgLink = ({text, urlImg, className, classNameText, link}) => {
    return (
        <Link className="flex" to={link}>
            <div className={`flex items-center rounded ${className}`}>
                <img src={urlImg} alt="Aquí va la imagen de un teléfono" />
                <span className={`text-sm leading-4 ${classNameText}`} >{text}</span>
            </div>
        </Link>
    )
}

export default ImgLink