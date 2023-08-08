import React, { useContext, useEffect } from 'react'
import BagCard from '../BagCard'
import ArrowRight from '../../assets/Arrow-right.svg'
import ArrowLink from '../ArrowLink'
import { arrayCoffeFromAppi } from "../../utils/util.js";
import { AllItemsContext } from '../../context/CoffeContex';


const BagsCoffe = () => {
    const {allCoffe, setAllCoffe} = useContext(AllItemsContext);
    const getCoffefromAppi = async () => {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        return data.products;
      }

    useEffect(() => {
        // setAllCoffe(arrayCoffeFromAppi);
        getCoffefromAppi().then(data => setAllCoffe(data));
        // getCoffefromAppi().then(data => setAllCoffe(data.sort((a, b) => a.price - b.price)));
      }, []);

    return (
        <section className="flex flex-col items-center gap-6 p-10">
            <h2 className='font-medium text-2xl leading-7 text-green'>Novedades</h2>

            <article className="flex flex-row gap-8 justify-between">
                {allCoffe?.slice(0, 4).map((objCoffe, i) => i < 4 ? <BagCard objCoffe={objCoffe} key={objCoffe._id} /> : null)}
            </article>

            <ArrowLink text={'Ver todos'}
                textColor={'text-blackOriginal'}
                urlImg={ArrowRight}
                link={'store'} />

        </section>
    )
}

export default BagsCoffe