"use client"

import Image from 'next/image';
import React from 'react';

interface PropsType {
  item: {
    id: number;
    product_name: string;
    product_description: string;
    price: number;
    image: string;
  }
}

const ProductCard: React.FC<PropsType> = ({ item }) => {
  return (
    <div className="glass p-4 rounded-xl bg-red-200 mt-10 flex flex-col">
      <div className="relative w-32 h-32 bg-blue-100 p-3 rounded-full shadow m-auto -mt-16">
        <div className="relative w-full h-full">
        <Image src={`/assets/products/${item?.image}.png`} fill objectFit='contain' alt={item?.product_name} />
        </div>
      </div>
      <div className="pt-10">
        <p className="font-bold text-lg pb-2">{item?.product_name}</p>
        <p className='text-sm landing-none text-slate-500'>{item?.product_description}</p>
        <div className="flex justify-between pt-5">
          <h3 className='text-2xl font-bold'>${item?.price}</h3>
          <button className='w-10 h-10 rounded-full text-3xl bg-slate-700 text-white'>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;