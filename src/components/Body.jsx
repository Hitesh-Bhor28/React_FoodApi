import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import './dashboard.css';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // for reset

  const [searchQuery, setSearchQuery] = useState("");
  const isOnline = useOnlineStatus()

  useEffect(() => {
    dataFetching();
  }, []);

  async function dataFetching() {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.00240&lng=73.79450&collection=83669&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null'
    );
    const json = await response.json();

    const cards = json.data?.cards || [];

    // extract only restaurant cards with required fields
    const restaurants = cards
      .filter(
        (card) =>
          card?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
      )
      .map((card) => {
        const info = card.card.card.info;
        return {
          id: info.id,
          imageId: info.cloudinaryImageId,
          name: info.name,
          cuisines: info.cuisines?.join(', '),
          estimatedTime: info.sla?.slaString,
          rating: info.avgRating
        };
      });

    setRestaurantData(restaurants);
    setAllRestaurants(restaurants); // store for reset
  }

  const handleFilter = () => {
    const restaurantFilterData = allRestaurants.filter((res) => res.rating > 4.4);
    setRestaurantData(restaurantFilterData);
  };

  const handleReset = () => {
    setRestaurantData(allRestaurants);
  };

  const handleSearch = () => {
    const restaurantSearchData = allRestaurants.filter((res) => res.name?.toLowerCase().includes(searchQuery));
    if (restaurantSearchData.length === 0) {
      console.log("no data found")
    } else {
      setRestaurantData(restaurantSearchData);
    }
  }
  if(isOnline === false) return (<h1>Looks Like Your Are Offline</h1>) 
  return restaurantData.length === 0 ? (<Shimmer />) :
    (
      <div className="body">
        <div className="filter">

          <div className='search'>
            <input type="search" onKeyUp={(e) =>{handleSearch()}} onChange={(e) => { setSearchQuery(e.target.value.toLowerCase()) }} />
            <button type="button" onClick={handleSearch}>Search</button>
          </div>

          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
          <button className="filter-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="res-container">
          {restaurantData.map((restaurant, index) => (
            <Link to={`restaurant/${restaurant.id}`} key={restaurant.id} className="resLink"><RestaurantCard restaurant={restaurant} /></Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
