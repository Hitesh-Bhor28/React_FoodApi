import React, { useState } from 'react'
import { useEffect } from 'react';

const useRestaurantMenu = (resId) => {
    const [itemCards, setItemCards] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    async function resItemsFetch() {
        const resJsonMap = {
            "70995": "https://jsonkeeper.com/b/5WTVE",
            "104757": "https://jsonkeeper.com/b/9PXK6",
            "185801": "https://jsonkeeper.com/b/GTVCK",
            "200001": "https://jsonkeeper.com/b/FXJDO",
            "235624": "https://jsonkeeper.com/b/V4M1R",
            "278323": "https://jsonkeeper.com/b/WPKAH",
            "345912": "https://jsonkeeper.com/b/3TKIR",
            "565292": "https://jsonkeeper.com/b/BB5WM",
            "672969": "https://jsonkeeper.com/b/HH8QC",
        }

        const data = await fetch(resJsonMap[resId]);
        const jsonData = await data.json();

        const restaurantInfo = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[0].card.card.info;
        const itemCards = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || [];

        setRestaurantInfo(restaurantInfo)
        setItemCards(itemCards)
    }

    useEffect(() => {
        resItemsFetch();
    }, [resId])



    return {restaurantInfo, itemCards};
}

export default useRestaurantMenu;