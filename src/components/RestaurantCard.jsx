import React from 'react';
import { CARD_IMG_BASE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {
  const {id, imageId, name, cuisines, rating, estimatedTime } = restaurant;

  return (
    <div className="w-3xs h-80 bg-[#f0f0f0] p-[50px 5px] pt-0 m-2.5 mb-[2%] hover:cursor-pointer hover:border-1 border-black" key={restaurant.id}>
      <img className="w-full h-[45%]" src={CARD_IMG_BASE_URL + imageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating} stars</h4>
      <h4>{estimatedTime}</h4>
    </div>
  );
};

export default RestaurantCard;
