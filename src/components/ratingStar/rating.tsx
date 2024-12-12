import React from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number; // Number of stars that should be filled
  totalStars?: number; // Total number of stars to display
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-yellow' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export default StarRating;
