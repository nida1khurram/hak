// export default {
//     name: 'product',
//     type: 'document',
//     title: 'Product',
//     fields: [
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//       },
//       {
//         name: 'name',
//         type: 'string',
//         title: 'Product Name',
//       },
//       {
//         name: 'description',
//         type: 'string',
//         title: 'Description'
//       },
//       {
//         name: 'price',
//         type: 'number',
//         title: 'Product Price',
//       },
//       {
//         name: 'discountPercentage',
//         type: 'number',
//         title: 'Discount Percentage',
//       },
//       {
//         name: 'priceWithoutDiscount',
//         type: 'number',
//         title: 'Price Without Discount',
//         description: 'Original price before discount'
//       },
//       {
//         name:'rating',
//         type:'number',
//         title:'Rating',
//         description:'Rating of the product'
//       },
//       {
//         name: 'ratingCount',
//         type: 'number',
//         title: 'Rating Count',
//         description: 'Number of ratings'
//       },
//       {
//         name: 'tags',
//         type: 'array',
//         title: 'Tags',
//         of: [{ type: 'string' }],
//         options: {
//           layout: 'tags'
//         },
//         description: 'Add tags like "new arrival", "bestseller", etc.'
//       },
//       {
//         name: 'sizes',
//         type: 'array',
//         title: 'Sizes',
//         of: [{ type: 'string' }],
//         options: {
//           layout: 'tags'
//         },
//         description: 'Add sizes like S , M , L , XL , XXL'
//       },
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Product Image',
//         options: {
//           hotspot: true // Enables cropping and focal point selection
//         }
//       }
//     ]
//   };
export default {
  name: 'chef',
  type: 'document',
  title: 'Chef',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Chef Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      description: 'Role or title of the chef (e.g., Head Chef, Sous Chef)',
    },
    {
      name: 'experience',
      type: 'number',
      title: 'Years of Experience',
      description: 'Number of years the chef has worked in the culinary field',
    },
    {
      name: 'specialty',
      type: 'string',
      title: 'Specialty',
      description: 'Specialization of the chef (e.g., Italian Cuisine, Pastry)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Chef Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short bio or introduction about the chef',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Currently Active',
      description: 'Availability status of the chef',
    },
  ],
};