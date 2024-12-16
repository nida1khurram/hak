import { products } from '@/components/ourShop/productData';
import { Container } from '@/components/container';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StarRating from '@/components/ratingStar/rating';
import ShopDescription from '@/components/shopDetail/shopDescription';
import SimilarProducts from '@/components/shopDetail/similarProducts';
import { TopHeader } from '@/components/header/topHeader';
import { PHeader } from '@/components/header/t2';
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      {/* import header */}
               <TopHeader />
               <PHeader title='Our Menu'/>
                {/* import header end*/}
                
      <div className="mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 px-0 md:px-32">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-10">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl text-orange-500 font-bold mr-4">${product.price.toFixed(2)}</span>
              {product.price2 && (
                <span className="text-xl text-gray-500 line-through">${product.price2.toFixed(2)}</span>
              )}
            </div>
            {product.rating && (
              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>
            )}
            <p className="mb-4">Category: {product.category}</p>
            {product.sell && (
              <p className="mb-4 inline-block bg-orange-500 text-white px-2 py-1 rounded">{product.sell}</p>
            )}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors mb-4 ml-4">
              <Link href={'/cart'}>Add to Cart</Link>
            </button>
            <Link href="/shop" className="text-orange-500 font-bold hover:underline ml-4">
              Back to Shop
            </Link>
          </div>
        </div>


        {/* description */}
        <div className='mt-20'>
        <ShopDescription />
        </div>

{/* description end*/}

   {/* similar product */}
<SimilarProducts />
      </div>
    </Container>
  );
}

