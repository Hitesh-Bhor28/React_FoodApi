import { useParams } from "react-router-dom";
import { useState } from "react";
import ResMenuShimmer from "./ResMenuShimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { CARD_IMG_BASE_URL } from "../../utils/constants";

const ResMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, itemCards } = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!restaurantInfo) return <ResMenuShimmer />;

  return (
    <div className="p-4">
      {/* 🏪 Restaurant Info */}
      <div className="my-4 p-4 flex flex-col justify-center items-center gap-1 bg-[aliceblue] rounded-md shadow">
        <h1 className="text-2xl font-bold">{restaurantInfo.name}</h1>
        <p className="text-gray-700">
          {restaurantInfo.cuisines.join(", ")} • ⭐ {restaurantInfo.avgRating}
        </p>
        <p className="text-gray-500">
          {restaurantInfo.locality}, {restaurantInfo.areaName}
        </p>
      </div>

      {/* 🍴 Accordion Menu */}
      <div className="mx-auto w-[80%]">
        {itemCards.map((section, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md mb-4 bg-white shadow-sm"
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-t-md hover:bg-gray-200 transition"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="font-semibold text-lg">{section.title}</h2>
              <span className="text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                {section.itemCards?.map((item) => (
                  <div
                    key={item.card.info.id}
                    className="border-b border-gray-200 py-2 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{item.card.info.name}</p>
                      <p className="text-sm text-gray-600">
                        ₹{item.card.info.price / 100}
                      </p>
                    </div>
                    {item.card.info.imageId && (
                      <img
                        src={CARD_IMG_BASE_URL+item.card.info.imageId}
                        alt={item.card.info.name}
                        className="w-16 h-16 rounded-md object-cover ml-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
