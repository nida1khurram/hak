"use client"
import React, { useEffect, useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { FaArrowsRotate } from "react-icons/fa6";
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';

import Link from 'next/link';
import { client } from '@/sanity/lib/client'; 

// Define Product type
interface Product {
  name: string;
  slug: string;
  image: string;
  category: string;
  price: number;
  price2?: number;
  rating?: number;
  sell?: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        name,
        "slug": slug.current,
        "image": image.asset->url,
        category,
        price,
        price2,
        rating,
        sell
      }`;
      setProducts(await client.fetch(query));
    };
    
    fetchProducts();
  }, []);
  console.log(products)
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(({ slug, image, name, price, price2, sell }) => (
        <div key={slug} className="max-w-[312px] rounded-lg shadow-md overflow-hidden">
          <Link href={`/shop/${slug}`}>
            <div className="relative group">
   
    <Image src={urlFor(image).url() || "/placeholder.png"}
     alt={name} 
     width={800}
      height={280}
       className="object-cover" />
{/* demo */}
{/* <div  className="shadow-lg relative group"> */}

    {/* icon */}
    <div className="flex  items-center justify-center gap-3 text-[#4f4f4f] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <FaArrowsRotate />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <MdOutlineShoppingBag />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full '>
                    <FaRegHeart />
                  </div>
                </Link>
              {/* </div> */}
              {/* icon */}
              </div>
{/* demo end */}
              {sell && (
                <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
                  {sell}
                </span>
              )}
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/shop/${slug}`}>
              <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">{name}</h3>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">${price.toFixed(2)}</span>
              {price2 && (
                <span className="text-gray-600 line-through">${price2.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductList;

