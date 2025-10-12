import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../dashboard.css'

const ResMenu = () => {
  const { resId } = useParams();
  const [itemCards, setItemCards] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    resItemsFetch();
  }, [])

  async function resItemsFetch() {
    const data = await fetch(`../../../api/${resId}.json`);
    const jsonData = await data.json();

    const restaurantInfo = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[0].card.card.info;
    const itemCards = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || [];

    setRestaurantInfo(restaurantInfo)
    setItemCards(itemCards)
  }

  return (
    <>
      {restaurantInfo && (
        <div className="resHeader">
          <h1>Reataurant Menu - <b>{restaurantInfo.name}</b></h1>
          <p>{restaurantInfo.cuisines.join(", ")}  -  Ratings:{restaurantInfo.avgRating}⭐</p>
          <p>{restaurantInfo.locality}, {restaurantInfo.areaName}</p>
        </div>
      )}

      {itemCards.map((item, index) => (
        <div className='resMenu' key={index}>
          <h3>{item.card.info.name}</h3>
          <p>₹{item.card.info.price / 100}</p>
        </div>
      ))}
    </>
  )
}

export default ResMenu