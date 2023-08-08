import React, { useContext, useEffect } from 'react'
import { AllItemsContext } from '../context/CoffeContex'
import BagCard from '../components/BagCard';
import CardInfo from '../components/sectionsCafeDeAltura/CardInfo';
import FooterInfo from '../components/sectionsCafeDeAltura/FooterInfo';

const Store = () => {
    const { allCoffe, setAllCoffe } = useContext(AllItemsContext);
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
        <>
            <section className="flex flex-col items-center gap-6 p-10">
                <h2 className='font-medium text-2xl leading-7 text-green'>Novedades</h2>
                <article className="flex flex-wrap gap-8 justify-between">
                    {allCoffe?.map((objCoffe) => <BagCard key={objCoffe._id} objCoffe={objCoffe} />)}
                </article>

            </section>
            <CardInfo />
            <FooterInfo />
        </>
    )
};
export default Store;   