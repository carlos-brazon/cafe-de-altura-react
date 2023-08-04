import React, { useContext, useEffect, useState } from 'react'
import BagCard from '../components/BagCard'
import ArrowRight from '../assets/Arrow\ narrow\ right\ \(1\).png'
import { AllItemsContext } from '../context/CoffeContex'
import { Link } from 'react-router-dom'

const BagsCoffe = () => {
    const { allCoffe } = useContext(AllItemsContext);

    return (
        <section className="flex flex-col items-center gap-6 p-10">
            <h2 className='text-green'>Novedades</h2>

            <article className="flex flex-row gap-8 justify-between">
                {allCoffe.map((objCoffe, i) => i < 4 ? <BagCard objCoffe={objCoffe} key={objCoffe._id} /> : null)}
            </article>

            <Link to={'store'}>
                <div className="flex items-center gap-4">
                    <p className='flex font-semibold text-blackOriginal underline'>Ver todos</p>
                    <img src={ArrowRight} alt="Aquí va la imagen de una flecha" />
                </div>      
            </Link>

        </section>
    )
}

export default BagsCoffe