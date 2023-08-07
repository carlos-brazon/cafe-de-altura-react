import React, { createContext, useEffect, useState } from 'react'

export const AllItemsContext = createContext();

const CoffeContex = ({ children }) => {
  const [allCoffe, setAllCoffe] = useState([]);
  const [cloud, setCloud] = useState([])
  const [priceSubTotal, setPriceSubTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  const counterHeader = cloud?.reduce((acc, objCoffe) => acc + objCoffe.quantity, 0);
  const getCoffefromAppi = async () => {
    const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
    const data = await response.json();
    return data.products;
  }
  useEffect(() => {
    getCoffefromAppi().then(data => setAllCoffe(data));
  }, []);
  return (
    <AllItemsContext.Provider value={{ allCoffe, cloud, setCloud, priceSubTotal, setPriceSubTotal, counterHeader, selectedValue, setSelectedValue }}>
      {children}
    </AllItemsContext.Provider>
  );
};

export default CoffeContex;