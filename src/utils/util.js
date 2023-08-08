import React from 'react'

export const replaceDot = (number) => {
  return (number.toFixed(2)).replace('.', ',').concat('€')
}


const getCoffefromAppi = async () => {
    const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
    const data = await response.json();
    return data.products;
  }
  export const arrayCoffeFromAppi = await getCoffefromAppi();