import React, { useContext } from 'react'
import ButtonLink from './ButtonLink'
import TotalInfo from './TotalInfo';

const Total = () => {

    return (
        <div className="flex flex-col gap-4 p-6 w-[384px] h-[280px] bg-whiteOff">
            
            <TotalInfo />

            <div className="buttons flex gap-4">
                <ButtonLink text={'Ir a checkout'}
                    link={'/checkout'}
                    className={'bg-green text-white'} />

                <ButtonLink text={'Seguir comprando'}
                    link={'/store'}
                    className={'text-green'} />
            </div>
        </div>
    )
}

export default Total