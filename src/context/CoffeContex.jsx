import React, { createContext, useEffect, useState } from 'react'
import { arrayCoffeFromAppi } from "../utils/util.js";

export const AllItemsContext = createContext();

const CoffeContex = ({ children }) => {
  const [allCoffe, setAllCoffe] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [priceSubTotal, setPriceSubTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  const counterHeader = cloud?.reduce((acc, objCoffe) => acc + objCoffe.quantity, 0);

  return (
    <AllItemsContext.Provider value={{ allCoffe, setAllCoffe, cloud, setCloud, priceSubTotal, setPriceSubTotal, counterHeader, selectedValue, setSelectedValue }}>
      {children}
    </AllItemsContext.Provider>
  );
};

export default CoffeContex;