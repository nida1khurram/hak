// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // images:{
//     //     domains: ['cdn.sanity.io'],
        
    
//     // }
//    // next.config.js

// }
// export default nextConfig;
const config = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          pathname: '/my-bucket/**',
        },
      ],
    },
  }
  
  export default config
  
  