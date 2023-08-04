import React from 'react'

const TypeShipping = ({shippin, follow, type, value, idInput, onChange}) => {
    return (
        <div className="flex items-center justify-between gap-4 w-[800px]">
            <div className="flex gap-4 items-center ">
                <input onChange={onChange} className='w-4 h-4 accent-green' type="radio" id={idInput} name="gratis" value={value} />
                <div>
                    <label for={idInput}><span>{type}</span></label>
                    <p>{follow}</p>
                </div>
            </div>
            <h3>{value ? value.toFixed(2)+'€' : 'GRATIS'}</h3>
        </div>
    )
}

export default TypeShipping