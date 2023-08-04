import React from 'react'

const ButtonLink = ({ text, link, className }) => {
    return (
        <a href={link}><button className={className}>{text}</button></a>
        // <button link={link} className={className}>{text}</button>
    )
}

export default ButtonLink