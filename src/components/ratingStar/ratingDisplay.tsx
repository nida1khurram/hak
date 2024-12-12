
import React from 'react';
import StarRating from './rating';

const StarRatingDisplay: React.FC = () => {
  return (
    < >
      <h1 className="text-2xl font-bold mb-4 text-yellow ">Star Rating Example</h1>
    
      <StarRating rating={4} />
   
      
    </>
  );
};

export default StarRatingDisplay;
