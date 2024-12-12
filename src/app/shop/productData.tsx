export interface Product {
  id: number;
  name: string;
  price: number;
  price2?: number; // Optional property
  rating?: number; // Optional property if not all products have a rating
  image: string;
  category: string;
  sell?:string;
}
// import { Product } from './types';

export const products: Product[] = [
  { id: 1, name: 'Fresh Lime', price: 38.00, price2: 45.00, image: '/shoplist/p1.png', category: 'Sandwiches' },
  { id: 2, name: 'Chocolate Muffin', price: 15.99, image: '/shoplist/p2.png', category: 'Burger', sell:'Sell' },
  { id: 3, name: 'Burger', price: 18.99, price2: 45.00, image: '/shoplist/p3.png', category: 'Pizza' },
  { id: 4, name: 'Country Burger', price: 24.99, image: '/shoplist/p4.png', category: 'Sushi' },
  { id: 5, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Noodles' },
  { id: 6, name: 'Pizza', price: 16.99, rating: 4.6, image: '/shoplist/p6.png', category: 'Chicken' },
  { id: 7, name: 'Cheese Butter', price: 11.99, image: '/shoplist/p7.png', category: 'Sandwiches' },
  { id: 8, name: 'Sandwiches', price: 19.99, image: '/shoplist/p8.png', category: 'Pizza' },
  { id: 9, name: 'Chicken Chup', price: 22.99, image: '/shoplist/p9.png', category: 'Sushi', sell:'Sell' },
  { id: 10, name: 'Country Burger', price: 13.99, image: '/shoplist/p4.png', category: 'Noodles' },
  { id: 11, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Burger' },
  { id: 12, name: 'Pizza', price: 13.99, rating: 4.2, image: '/shoplist/p6.png', category: 'Chicken' },
  { id: 13, name: 'Cheese Butter', price: 13.99, image: '/shoplist/p7.png', category: 'Chicken' },
  { id: 14, name: 'Sandwiches', price: 13.99, image: '/shoplist/p8.png', category: 'Chicken' },
  { id: 15, name: 'Chicken Chup', price: 13.99, image: '/shoplist/p9.png', category: 'Chicken' },
];



// export const products = [
//     { id: 1, name: 'Fresh Lime', price: 38.00, price2: 45.00, image: '/shoplist/p1.png', category: 'Sandwiches' },

//     { id: 2, name: 'Chocolate Muffin', price: 15.99, image: '/shoplist/p2.png', category: 'Burger' },
//     { id: 3, name: 'Burger', price: 18.99, price2: 45.00, image: '/shoplist/p3.png', category: 'Pizza' },
//     { id: 4, name: 'Country Burger', price: 24.99,  image: '/shoplist/p4.png', category: 'Sushi' },
//     { id: 5, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Noodles' },
//     { id: 6, name: 'Pizza', price: 16.99, rating: 4.6, image: '/shoplist/p6.png', category: 'Chicken' },
//     { id: 7, name: 'Cheese Butter', price: 11.99, image: '/shoplist/p7.png', category: 'Sandwiches' },
//     { id: 8, name: 'Sandwiches', price: 19.99, image: '/shoplist/p8.png', category: 'Pizza' },
//     { id: 9, name: 'Chicken Chup', price: 22.99, image: '/shoplist/p9.png', category: 'Sushi' },
//     { id: 10, name: 'Country Burger', price: 13.99,image: '/shoplist/p4.png', category: 'Noodles' },
//     { id: 11, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Burger' },
//     { id: 12, name: 'Pizza', price: 13.99, rating: 4.2, image: '/shoplist/p6.png', category: 'Chicken' },
//     { id: 13, name: 'Cheese Butter', price: 13.99,  image: '/shoplist/p7.png', category: 'Chicken' },
//     { id: 14, name: 'Sandwiches', price: 13.99,  image: '/shoplist/p8.png', category: 'Chicken' },
//     { id: 15, name: 'Chicken Chup', price: 13.99,  image: '/shoplist/p9.png', category: 'Chicken' },
    
//   ]

  export const categories = ['Sandwiches', 'Burger', 'Chicken Chup','Drink', 'Pizza','Thi', 'Non Veg', 'Uncategorized'];

  export const latestProducts = [
    { id: 1, name: 'Pizza', price: 35.00 ,rating: 2, image: '/shoplist/latest-product.png' },
    { id: 1, name: 'Cupcake', price: 35.00 ,rating: 2, image: '/shoplist/latest-product.png' },
    { id: 1, name: 'Cookies', price: 35.00 ,rating: 2,image: '/shoplist/latest-product.png' },
    { id: 1, name: 'Burger', price: 35.00 ,rating: 2,  image: '/shoplist/latest-product.png' },
  ]