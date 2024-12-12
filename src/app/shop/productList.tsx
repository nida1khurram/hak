import React from 'react';
import { Product } from '../shop/productData';
import { FaArrowsRotate } from "react-icons/fa6";
import {  FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card';

interface ProductListProps {
  filteredProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ filteredProducts }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="max-w-[312px] max-h-330px rounded-lg shadow-md overflow-hidden">
          {/* hovercard */}
          <HoverCard>
            <HoverCardTrigger>
              <Image
                src={product.image}
                alt={product.name}
                width={312}
                height={267}
                className="w-full h-48 object-cover"
              />
            </HoverCardTrigger>
            {/* 1 */}
            <HoverCardContent
              className={`w-[40.14px] h-[34px] bg-orange-500 text-white text-center mt-[-100px] ml-[-70px] absolute`}
            >
              <Link href="#">
                <FaArrowsRotate className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </Link>
            </HoverCardContent>
            {/* 2 */}
            <HoverCardContent
              className={`w-[40.14px] h-[34px] bg-orange-500 text-white text-center mt-[-100px] ml-[-20px] absolute`}
            >
              <Link href="#">
                <MdOutlineShoppingBag className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </Link>
            </HoverCardContent>
            {/* 3 */}
            <HoverCardContent
              className={`w-[40.14px] h-[34px] bg-white text-orange-500 text-center mt-[-100px] ml-[30px] absolute`}
            >
              <Link href="#">
                <FaRegHeart className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </Link>
            </HoverCardContent>
          </HoverCard>
          {/* hovercard end*/}

          <div className="p-4">
 {/* sell */}
              <div className="border-2 border-green relative">
                {product.sell && (
                  <p className={`w-[52px] h-[22px] absolute mt-[-200px] mr-40 text-white bg-orange-600 rounded-md`}>
                   <span className='ml-3 text-[14px] '> {product.sell}</span>
                  </p>
                )}
              </div>

                {/* sell */}
            <h3 className="font-semibold text-lg mb-2 text-black">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                {/* price old */}
                <div className="flex mr-36">
                {product.price2 && (
                  <p className={`text-gray-600 relative inline-block`}>
                    <span className="absolute inset-0 border-b-2 border-gray-600 transform -translate-y-1/2"></span>
                    ${product.price2.toFixed(2)}
                  </p>
                )}
              </div>
               

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
