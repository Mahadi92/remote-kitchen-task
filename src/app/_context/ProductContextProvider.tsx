"use client"

import React from 'react';
import { createContext, useContext, useState } from "react";
import { productList } from "@/app/_data/productData"


export const ProductContext = createContext<any>([]);


const ProductContextProvider:React.FC<any> = ({ children }) => {

  const [productData, setProductData] = useState<{}[]>(productList)
  
  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;