export interface Product {
    id: number;
    name: string;
    price: number;
    price2?: number;
    rating?: number;
    image: string;
    category: string;
    sell?: string;
    slug: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Fresh Lime', price: 38.00, price2: 45.00, image: '/shoplist/p1.png', category: 'Sandwiches', slug: 'fresh-lime' },
    { id: 2, name: 'Chocolate Muffin', price: 15.99, image: '/shoplist/p2.png', category: 'Burger', sell: 'Sell', slug: 'chocolate-muffin' },
    { id: 3, name: 'Burger', price: 18.99, price2: 45.00, image: '/shoplist/p3.png', category: 'Pizza', slug: 'burger' },
    { id: 4, name: 'Country Burger', price: 24.99, image: '/shoplist/p4.png', category: 'Sushi', slug: 'country-burger' },
    { id: 5, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Noodles', slug: 'drink' },
    { id: 6, name: 'Pizza', price: 16.99, rating: 4.6, image: '/shoplist/p6.png', category: 'Chicken', slug: 'pizza' },
    { id: 7, name: 'Cheese Butter', price: 11.99, image: '/shoplist/p7.png', category: 'Sandwiches', slug: 'cheese-butter' },
    { id: 8, name: 'Sandwiches', price: 19.99, image: '/shoplist/p8.png', category: 'Pizza', slug: 'sandwiches' },
    { id: 9, name: 'Chicken Chup', price: 22.99, image: '/shoplist/p9.png', category: 'Sushi', sell: 'Sell', slug: 'chicken-chup' },
    { id: 10, name: 'Country Burger', price: 13.99, image: '/shoplist/p4.png', category: 'Noodles', slug: 'country-burger-2' },
    { id: 11, name: 'Drink', price: 14.99, price2: 45.00, image: '/shoplist/p5.png', category: 'Burger', slug: 'drink-2' },
    { id: 12, name: 'Pizza', price: 13.99, rating: 4.2, image: '/shoplist/p6.png', category: 'Chicken', slug: 'pizza-2' },
    { id: 13, name: 'Cheese Butter', price: 13.99, image: '/shoplist/p7.png', category: 'Chicken', slug: 'cheese-butter-2' },
    { id: 14, name: 'Sandwiches', price: 13.99, image: '/shoplist/p8.png', category: 'Chicken', slug: 'sandwiches-2' },
    { id: 15, name: 'Chicken Chup', price: 13.99, image: '/shoplist/p9.png', category: 'Chicken', slug: 'chicken-chup-2' },
  ];
  
  export const categories = ['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thi', 'Non Veg', 'Uncategorized'];
  
  export const latestProducts = [
    { id: 1, name: 'Pizza', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-pizza' },
    { id: 2, name: 'Cupcake', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-cupcake' },
    { id: 3, name: 'Cookies', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-cookies' },
    { id: 4, name: 'Burger', price: 35.00, rating: 2, image: '/shoplist/latest-product.png', slug: 'latest-burger' },
  ];
  
  