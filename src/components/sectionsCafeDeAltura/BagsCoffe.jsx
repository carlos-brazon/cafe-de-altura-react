import React, { useContext } from 'react'
import BagCard from '../BagCard'
import ArrowRight from '../../assets/Arrow-right.svg'
import { AllItemsContext } from '../../context/CoffeContex'
import ArrowLink from '../ArrowLink'

const BagsCoffe = () => {
    const { allCoffe } = useContext(AllItemsContext);

    return (
        <section className="flex flex-col items-center gap-6 p-10">
            <h2 className='font-medium text-2xl leading-7 text-green'>Novedades</h2>

            <article className="flex flex-row gap-8 justify-between">
                {allCoffe.slice(0, 4).map((objCoffe, i) => i < 4 ? <BagCard objCoffe={objCoffe} key={objCoffe._id} /> : null)}
            </article>

            <ArrowLink text={'Ver todos'}
                textColor={'text-blackOriginal'}
                urlImg={ArrowRight}
                link={'store'} />

        </section>
    )
}

export default BagsCoffe