import React from 'react';
import { CARD_IMG_BASE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {
  const {id, imageId, name, cuisines, rating, estimatedTime } = restaurant;

  return (
    <div className="res-card" key={restaurant.id}>
      <img className="res-logo" src={CARD_IMG_BASE_URL + imageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating} stars</h4>
      <h4>{estimatedTime}</h4>
    </div>
  );
};

export default RestaurantCard;
