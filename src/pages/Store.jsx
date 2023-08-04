import React, { useContext } from 'react'
import { AllItemsContext } from '../context/CoffeContex'
import FooterInfo from '../components/FooterInfo';
import CardInfo from './CardInfo';
import BagCard from '../components/BagCard';

const Store = () => {
    const { allCoffe } = useContext(AllItemsContext);

    return (
        <>
            <section className="flex flex-col items-center gap-6 p-10">
                <h2 className='text-green'>Novedades</h2>
                <article className="flex flex-wrap gap-8 justify-between">
                    {allCoffe.map((objCoffe) => <BagCard key={objCoffe._id} objCoffe={objCoffe} />)}
                </article>

            </section>
            <CardInfo />
            <FooterInfo />
        </>
    )
};
export default Store;