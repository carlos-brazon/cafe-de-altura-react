import React, { useState } from 'react'
import TypeShipping from '../components/TypeShipping';
import Input from '../components/Input';
import IconBizum from "../assets/icon-Bizum.svg";
import TotalInfo from '../components/TotalInfo';

const Checkout = () => {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [selectRadio, setSelectRadio] = useState('');
  console.log(selectRadio);
  console.log(list);

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setSelectRadio((event.target.value));
  };

  const handleInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'email') {
      const cleanedValue = inputValue.replace(/[^a-zA-Z0-9@.\-_]/g, '');
      setUser((prev) => ({ ...prev, [inputName]: cleanedValue }));
    }
    else {
      setUser((prev) => ({ ...prev, [inputName]: inputValue }));
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();
    setList(prev => [{ ...user, name: user.name?.toLowerCase() }]);
    setUser(prev => ({ ...prev }));
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center p-10'>
      <h2 className='font-medium text-2xl leading-7 text-green'>Checkout</h2>
      <div className='flex gap-6'>
        <div className='flex flex-col gap-6 w-[792px]'>
          <h3 className='font-semibold text-lg leading-6'>Seleccionar método de pago</h3>
          <TypeShipping follow={'Opción estándar sin seguimiento'}
            value={user?.gratis || ''}
            type={'Tarjeta de débito'}
            onChange={handleRadioChange} />

          <div className='flex flex-col w-[285px] gap-2' action="">
            <Input labelText={'Titular'}
              type={'text'}
              name={'titular'}
              id={'titular1'}
              onChange={handleInput}
              value={user.titular || ''}
              valueSelect={'Nombre del titular'}
            />
            <Input labelText={'Número de la tarjeta'}
              type={'text'}
              name={'card'}
              id={'card1'}
              onChange={handleInput}
              value={user.card || ''}
              valueSelect={'1234 1234 1234 1234'}
            />

            <div className='flex gap-4 justify-between'>
              <div className='w-[128px]'>
                <Input labelText={'Fecha de caducidad'}
                  type={'text'}
                  name={'DateOfExpiry'}
                  id={'DateOfExpiry1'}
                  onChange={handleInput}
                  value={user.card || ''}
                  valueSelect={'MM / YY'}
                />
              </div>

              <div className='w-[128px]' >
                <Input labelText={'CVC'}
                  type={'text'}
                  name={'CVC'}
                  id={'CVC1'}
                  onChange={handleInput}
                  value={user.card || ''}
                  valueSelect={'123'}
                />
              </div>
            </div>
          </div>

          <div className='bg-taupe h-px last:hidden'></div>

          <TypeShipping follow={'Será necesario recibir el comprobante de la transferencia para preparar tu pedido'}
            // value={''}
            type={'Transferencia bancaria a la cuenta ES12 1234 1234 123457890'}
            onChange={handleRadioChange} />

          <div className='bg-taupe h-px last:hidden'></div>

          <div className='flex gap-4'>
            <TypeShipping follow={''}
              // value={''}
              type={'Bizum'}
              onChange={handleRadioChange} />
            <img src={IconBizum} alt="Aquí va la imagen de bizum" />
          </div>

          <h3 className='font-semibold text-lg leading-6'>Dirección de envío</h3>

          <div className='flex flex-col gap-2 w-[521px]'>
            <Input labelText={'Nombre'}
              type={'text'}
              name={'nameDirection'}
              id={'name1'}
              onChange={handleInput}
              value={user.name || ''}
              valueSelect={''}
            />
            <Input labelText={'Apellidos'}
              type={'text'}
              name={'lastName'}
              id={'lastName1'}
              onChange={handleInput}
              value={user.lastName || ''}
              valueSelect={''}
            />
            <Input labelText={'Teléfono'}
              type={'tel'}
              name={'phoneDirection'}
              id={'phoneDirection1'}
              onChange={handleInput}
              value={user.phoneDirection || ''}
              valueSelect={'+34 600 6000 600'}
            />
            <Input labelText={'Email'}
              type={'text'}
              name={'enmaiDirection'}
              id={'enmaiDirection1'}
              onChange={handleInput}
              value={user.enmaiDirection || ''}
              valueSelect={''}
            />
            <Input labelText={'País'}
              type={'text'}
              name={'country'}
              id={'country1'}
              onChange={handleInput}
              value={user.country || ''}
              valueSelect={''}
            />
            <div className='flex gap-6 w-full'>
              <Input labelText={'Población'}
                type={'text'}
                name={'city'}
                id={'city1'}
                onChange={handleInput}
                value={user.city || ''}
                valueSelect={''}
              />
              <Input labelText={'CP'}
                type={'text'}
                name={'cp'}
                id={'cp1'}
                onChange={handleInput}
                value={user.cp || ''}
                valueSelect={'123'}
              />
            </div>

            <div className='flex gap-6 w-[519px] items-center'>
              <Input labelText={'Calle'}
                type={'text'}
                name={'street'}
                id={'street1'}
                onChange={handleInput}
                value={user.street || ''}
                valueSelect={''}
              />
              <Input labelText={'Nº'}
                type={'text'}
                name={'numberHose'}
                id={'numberHose1'}
                onChange={handleInput}
                value={user.numberHose || ''}
                valueSelect={''}
              />
              <Input labelText={'Piso'}
                type={'text'}
                name={'floor'}
                id={'floor1'}
                onChange={handleInput}
                value={user.floor || ''}
                valueSelect={''}
              />
              <Input labelText={'Puerta'}
                type={'text'}
                name={'door'}
                id={'door1'}
                onChange={handleInput}
                value={user.door || ''}
                valueSelect={''}
              />
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-4 p-6 w-[384px] h-[280px] bg-whiteOff">

          <TotalInfo />
          <input className='w-fit py-3 px-6 bg-green rounded text-white' type="submit" value="Pagar y realizar pedido" />
        </div>
      </div>
    </form>
  )
}

export default Checkout;  