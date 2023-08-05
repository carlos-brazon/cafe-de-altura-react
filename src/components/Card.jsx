import React from 'react'

const Card = ({url, title, text, className}) => {
    return (
        <div className={'flex flex-col items-center justify-center p-6 gap-4 rounded-lg bg-white w-[316px] h-[232px]'}>
            <img className='p-3 bg-green rounded-2xl' src={url} alt="" />
            <h3>{title}</h3>
            <p className='text-bluedark'>{text}</p>
        </div>
    )
}

export default Card