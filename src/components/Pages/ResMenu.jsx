import { useParams } from 'react-router-dom'
import '../dashboard.css'
import ResMenuShimmer from './ResMenuShimmer';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const ResMenu = () => {
  const { resId } = useParams();
  const {restaurantInfo, itemCards} = useRestaurantMenu(resId)

  return (
    <>
      {!restaurantInfo ? (<ResMenuShimmer />) : (
        <>
          <div className="resHeader">
            <h1>Restaurant Menu - <b>{restaurantInfo.name}</b></h1>
            <p>{restaurantInfo.cuisines.join(", ")}  -  Ratings: {restaurantInfo.avgRating}⭐</p>
            <p>{restaurantInfo.locality}, {restaurantInfo.areaName}</p>
          </div>

          {itemCards.map((item, index) => (
            <div className='resMenu' key={index}>
              <h3>{item.card.info.name}</h3>
              <p>₹{item.card.info.price / 100}</p>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default ResMenu