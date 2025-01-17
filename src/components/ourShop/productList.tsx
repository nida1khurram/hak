
// import { useEffect, useState } from "react";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// import { Image as Iimage } from "sanity";
// import React from "react";

// // Fetch products using the Sanity client
// const fetchProducts = async (): Promise<IProduct[]> => {
//   const query = `*[_type == "product"]{
//     name,
//     "slug": slug.current,
//     image,
//     category,
//     price,
//     priceWithoutDiscount,
//     rating,
//     sell
//   }`;
//   return await client.fetch(query);
// };

// // Define Product type
// interface IProduct {
//   name: string;
//   slug: string;
//   image: Iimage;
//   category: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   rating?: number;
//   sell?: string;
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {products.map(({ slug, image, name, price, priceWithoutDiscount, sell }) => (
//         <div
//           key={slug}
//           className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
//         >
//           <Link href={`/shop/${slug}`}>
//             <div className="relative group">
//               <Image
//                 src={urlFor(image).url()}
//                 alt={name}
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-64"
//               />
//               <div className="absolute top-2 right-2 flex gap-2"></div>
//               {sell && (
//                 <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
//                   {sell}
//                 </span>
//               )}
//             </div>
//           </Link>
//           <div className="p-4">
//             <Link href={`/shop/${slug}`}>
//               <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
//                 {name}
//               </h3>
//             </Link>
//             <div className="flex items-center justify-between">
//               <span className="text-orange-500 font-bold">
//                 ${price.toFixed(2)}
//               </span>
//               {priceWithoutDiscount && (
//                 <span className="text-gray-600 line-through">
//                   ${priceWithoutDiscount.toFixed(2)}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;



import { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { Image as Iimage } from "sanity";
import React from "react";

// Fetch products using the Sanity client
const fetchProducts = async (): Promise<IProduct[]> => {
  const query = `*[_type == "food"]{
    name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available,


    "slug": slug.current,
  }`;
  return await client.fetch(query);
};

// Define Product type
interface IProduct {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags:string;
  image: Iimage;
  description:string;
  available:boolean;



  
  slug: string;
  
  
  
  // rating?: number;
  // sell?: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(({ slug, image, name, price, originalPrice,category,tags,description,available }) => (
        <div
          key={slug}
          className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
        >
          <Link href={`/shop/${slug}`}>
            <div className="relative group">
              <Image
                src={urlFor(image).url()}
                alt={name}
                width={200}
                height={200}
                className="object-cover w-full h-64"
              />
              <div className="absolute top-2 right-2 flex gap-2"></div>
              {tags && (
                <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
                  {tags}
                </span>
              )}
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/shop/${slug}`}>
              <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
                {name}
              </h3>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-gray-600 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
