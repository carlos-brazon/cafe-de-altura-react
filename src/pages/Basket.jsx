import React, { useContext, useState } from 'react'
import { AllItemsContext } from '../context/CoffeContex';
import ProducBasket from '../components/ProducBasket';
import TypeShipping from '../components/TypeShipping';
import Total from '../components/Total';
import { Link } from 'react-router-dom';

const Basket = () => {
  const { cloud, counterHeader, setSelectedValue } = useContext(AllItemsContext);
  // const [selectedValue, setSelectedValue] = useState(0);

  const handleRadioChange = (event) => {
    setSelectedValue(Number(event.target.value));
  };
  return (
    <section className="flex flex-col items-center p-6 gap-6">
      <h2 className='font-medium text-2xl leading-7 text-green'>Cesta (<span className='font-medium text-2xl leading-7'>{counterHeader}</span>)</h2>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 p-2 w-[811px] ">
          <h3 className='font-semibold text-lg leading-6'>Productos</h3>
          <div className='flex flex-col min-h-[280px] gap-6'>
            {cloud?.length ?
              cloud?.map(objCoffe => <ProducBasket key={objCoffe._id} objCoffe={objCoffe} />)
              : <p className='font-normal text-sm leading-4'>Tu cesta está vacia <Link className='font-semibold text-sm leading-4 underline' to={'/store'}>Pulsa aquí para agregar un nuevo producto</Link></p>}
          </div>

          <h3 className='font-semibold text-lg leading-6'>Seleccionar envío</h3>
          <TypeShipping follow={'Opción estándar sin seguimiento'}
            value={0}
            type={'Envío 5-7 días'}
            onChange={handleRadioChange} />

          <div className="basket-divider"></div>

          <TypeShipping follow={'Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00)'}
            value={9}
            type={'Envío urgente 24h'}
            idInput={'enviourgente'}
            onChange={handleRadioChange}
          />

        </div>
        <Total />
      </div>

    </section>
  );
};

export default Basket;


{/* <div className="basket-shipping flex items-center justify-between gap-4 w-[800px]">
  <div className="shipping-input flex gap-4 items-center ">
    <input className='w-4 h-4 accent-green' type="radio" id="enviogratis" name="gratis" value="Envío 5-7 días" />
    <div className="details">
      <label for="enviogratis"><span>Envío 5-7 días</span></label>
      <p>Opción estándar sin seguimiento</p>
    </div>
  </div>
  <h3>GRATIS</h3>
</div> */}

{/* <div className="basket-shipping flex items-center justify-between gap-4 w-[800px]">
  <div className="shipping-input flex gap-4 items-center">
    <input className='w-4 h-4 accent-green' type="radio" id="enviourgente" name="gratis" value="Envío urgente 24h " />
    <div className="details">
      <label for="enviourgente"><span>Envío urgente 24h</span></label>
      <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
    </div>
  </div>
  <h3>9,00 €</h3>
</div> */}
