import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({ text, link, className }) => {
    return (
        <Link to={link} className={`py-3 px-6 font-semibold text-sm leading-4 rounded ${className}`}>{text} </Link>
    )
}

export default ButtonLink