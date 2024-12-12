import React from 'react';
import StarRating from './rating';
import Image from 'next/image';
export const latestProducts = [
  { id: 1, name: 'Pizza', price: 35.00, rating: 4, image: '/shoplist/latest-product.png' },
  { id: 2, name: 'Cupcake', price: 35.00, rating: 2, image: '/shoplist/p1.png' },
  { id: 3, name: 'Cookies', price: 35.00, rating: 0, image: '/shoplist/p1.png' }, // Assuming no rating means 0
  { id: 4, name: 'Burger', price: 35.00, rating: 0, image: '/shoplist/p1.png' }, // Assuming no rating means 0
];
// export const latestProducts = [
//     { id: 1, name: 'Pizza', price: 35.00,rating: 2, image: '/shoplist/latest-product.png' },
//     { id: 1, name: 'Cupcake', price: 35.00,rating: 2, image: '/shoplist/p1.png' },
//     { id: 1, name: 'Cookies', price: 35.00,rating: 2,image: '/shoplist/p1.png' },
//     { id: 1, name: 'Burger', price: 35.00,rating: 2,  image: '/shoplist/p1.png' },
//   ]
const ProductList: React.FC = () => {
  return (
    // <div className="flex flex-wrap justify-center">
    //   {latestProducts.map(product => (
    //     <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
    //       <img className="w-full" src={product.image} alt={product.name} />
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2">{product.name}</div>
    //         <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
    //       </div>
    //       <div className="px-6 pb-4">
    //         <StarRating rating={product.rating} />
    //       </div>
    //     </div>
    //   ))}
    // </div>



<div className="max-w-[252px] max-h-[368px] text-[#333]">
                  <h2 className="text-xl font-bold">Latest Products</h2>
                 
                 {latestProducts.map(lproduct => (
                   <div key={lproduct.id} className="flex gap-2" >
                    
                  <Image
                  src={lproduct.image}
                  alt={lproduct.name}
                  width={72}
                  height={65}
                  className=" object-cover"
                />
                <p>{lproduct.name}</p>
                {/* <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p> */}
                <div className="px-6 pb-4">
    //         <StarRating rating={lproduct.rating} />
    //       </div>
                <p>{lproduct.price}</p>
                </div>
                     ))}
                  
             
                </div>





  );
};

export default ProductList;
