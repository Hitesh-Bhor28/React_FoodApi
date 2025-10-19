import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [itemCards, setItemCards] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const resJsonMap = {
      "278323": "/theobroma.json",
      "70995": "https://jsonkeeper.com/b/5WTVE",
      "104757": "https://jsonkeeper.com/b/9PXK6",
      "185801": "https://jsonkeeper.com/b/GTVCK",
      "200001": "https://jsonkeeper.com/b/FXJDO",
      "235624": "https://jsonkeeper.com/b/V4M1R",
      "345912": "https://jsonkeeper.com/b/3TKIR",
      "565292": "https://jsonkeeper.com/b/BB5WM",
      "672969": "https://jsonkeeper.com/b/HH8QC",
    };

    const fetchMenu = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = resJsonMap[resId];
        if (!url) throw new Error(`No data found for restaurant ID: ${resId}`);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const jsonData = await response.json();

        const cards =
          jsonData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          [];

        const restaurant = cards?.[0]?.card?.card?.info || {};

        // Collect all menu categories with title + items
        const categories =
          cards
            .map((c) => c?.card?.card)
            .filter((c) => c?.itemCards && c?.title) || [];

        setRestaurantInfo(restaurant);
        setItemCards(categories);
      } catch (err) {
        console.error("Failed to load menu:", err);
        setError(err.message);
        setRestaurantInfo(null);
        setItemCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [resId]);

  return { restaurantInfo, itemCards, loading, error };
};

export default useRestaurantMenu;
