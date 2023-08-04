import React, { useContext, useState } from 'react'
import Less from "../assets/menos.png";
import More from "../assets/mas.png";
import { AllItemsContext } from '../context/CoffeContex';

const ProducBasket = ({ objCoffe: { brand, img_url, price, quantity, _id } }) => {
    const [counter, setCounter] = useState(1)
    const { setCloud, allCoffe, setPriceSubTotal } = useContext(AllItemsContext)
    // console.log(counter);
    const more = (boolean) => {
        console.log(typeof Number(price));
        boolean ? setPriceSubTotal(prev => prev + price) : setPriceSubTotal(prev => prev - price)
        setCloud(prev => {
            const holdPrev = [...prev]
            const coffe = holdPrev.find(coffe => coffe._id == _id);
            if (coffe && boolean) {
                // setPriceSubTotal(prev => price+prev)
                coffe.quantity += 1
                return holdPrev
            }
            else {
                coffe.quantity -= 1
                return coffe.quantity == 0 ? holdPrev.filter(objCoffe => coffe._id !== objCoffe._id) : holdPrev
            }
        });
        // setCounter(quantity)
    }

    return (
        <>
            <div className="coffebag flex  items-center gap-6">
                <div className="basket-counter flex items-center gap-2">
                    <img onClick={() => more(false)} src={Less} alt="Aquí va la imagen de un menos" />
                    <p className="p-small flex items-center justify-center rounded-full text-green bg-greentransparen w-6 h-6" >{quantity}</p>
                    <img onClick={() => more(true)} src={More} alt="" />
                </div>
                <div className="basket-coffebag">
                    <img className='w-[55.66px] h-[55.66px]' src={img_url} alt="" />
                </div>
                <div className="basket-details flex flex-col gap-1 w-[506.34px]">
                    <a href="">{brand}</a>
                    <p>Paquete de café, 250 gr</p>
                </div>
                <h3>{(price * quantity).toFixed(2)}€</h3>
            </div>
            <div className='bg-taupe h-px last:hidden'></div>
        </>
    )
}

export default ProducBasket