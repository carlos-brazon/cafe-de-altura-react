import React from 'react'

const ImgLink = ({text, urlImg, className, weight}) => {
    return (
        <div className="flex">
            <div className={className}>
                <img src={urlImg} alt="Aquí va la imagen de un teléfono" />
                <a className={weight} href="">{text}</a>
            </div>
        </div>
    )
}

export default ImgLink