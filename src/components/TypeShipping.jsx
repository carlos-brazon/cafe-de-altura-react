import React from 'react'

const TypeShipping = ({ follow, type, value, idInput, onChange, name }) => {
    console.log(name);
    console.log(value);
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center ">
                <input onChange={onChange} className='w-4 h-4 accent-green' type="radio" id={idInput} name="gratis" value={value} />
                <div>
                    <label htmlFor={idInput}><span className='font-semibold text-sm leading-4'>{type}</span></label>
                    <p className='font-normal text-sm leading-4'>{follow}</p>
                </div>
            </div>
            <h3 className='font-semibold text-lg leading-6'>
                {value >0 ? value.toFixed(2) + '€' : value===0 ? 'GRATIS': ''}</h3>
        </div>
    )
}

export default TypeShipping