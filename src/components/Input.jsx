import React, { useState } from 'react'

const Input = ({ labelText, type, name, id, value, select, onChange, valueSelect}) => {
    const [selectinput, setSelectinput] = useState(false)

    const handleClick = (boolean) => {
        if (boolean) {
            setSelectinput(false)
        }
        else{
            setSelectinput(true)            
        }
    }
    return (
        <div className="flex relative flex-col">
            <label htmlFor={name} className="flex">{labelText}</label>
            <select id="country-code" name='country_code'
            onChange={onChange} onClick={() => handleClick()} 
            className={`${select ? '' : 'hidden'} -z-0 top-7 h-9 border-0 bg-transparent outline-none absolute pr-[5px] pl-[13px]`} >
                <option value="US">US</option>
                <option value="SP">SP</option>
            </select>
            <input onClick={() => handleClick(true)} 
            onChange={onChange}
            className={`${selectinput ? 'border-2 border-greenMed hover:border-greenMed' : ''} w-[470px] h-[43.78px] rounded-md border border-blueligth py-[9px] ${select || selectinput ? 'pr-[13px] pl-[66px] ' : ' px-[13px]'}   hover:border-blueMedLigth focus:outline-2 outline-greenMed `} 
            type={type} name={name} id={id} value={value} placeholder={ valueSelect  ==='SP'  ? '+34' : ''} />
        </div>
    )
}

export default Input